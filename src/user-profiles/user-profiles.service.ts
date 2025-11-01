import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@Injectable()
export class UserProfilesService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
  ) {}

  async create(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    const existing = await this.findByUserId(createUserProfileDto.userId);
    if (existing) {
      return this.update(existing.id, createUserProfileDto);
    }
    const profile = this.userProfileRepository.create(createUserProfileDto);
    return this.userProfileRepository.save(profile);
  }

  async findAll(): Promise<UserProfile[]> {
    return this.userProfileRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<UserProfile | null> {
    return this.userProfileRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async findByUserId(userId: number): Promise<UserProfile | null> {
    return this.userProfileRepository.findOne({
      where: { userId },
      relations: ['user'],
    });
  }

  async update(id: number, updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile> {
    await this.userProfileRepository.update(id, updateUserProfileDto);
    const updated = await this.findOne(id);
    if (!updated) {
      throw new Error('Profile not found after update');
    }
    return updated;
  }

  async remove(id: number): Promise<void> {
    await this.userProfileRepository.delete(id);
  }
}

