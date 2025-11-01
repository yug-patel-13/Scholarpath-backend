import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormFillRequest, RequestStatus } from './entities/form-fill-request.entity';
import { CreateFormFillRequestDto } from './dto/create-form-fill-request.dto';
import { UpdateFormFillRequestDto } from './dto/update-form-fill-request.dto';

@Injectable()
export class FormFillRequestsService {
  constructor(
    @InjectRepository(FormFillRequest)
    private formFillRequestRepository: Repository<FormFillRequest>,
  ) {}

  async create(createFormFillRequestDto: CreateFormFillRequestDto): Promise<FormFillRequest> {
    const request = this.formFillRequestRepository.create(createFormFillRequestDto);
    return this.formFillRequestRepository.save(request);
  }

  async findAll(): Promise<FormFillRequest[]> {
    return this.formFillRequestRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByUserId(userId: number): Promise<FormFillRequest[]> {
    return this.formFillRequestRepository.find({
      where: { userId },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<FormFillRequest | null> {
    return this.formFillRequestRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(id: number, updateFormFillRequestDto: UpdateFormFillRequestDto): Promise<FormFillRequest> {
    await this.formFillRequestRepository.update(id, updateFormFillRequestDto);
    const updated = await this.findOne(id);
    if (!updated) {
      throw new Error('Request not found after update');
    }
    return updated;
  }

  async remove(id: number): Promise<void> {
    await this.formFillRequestRepository.delete(id);
  }
}

