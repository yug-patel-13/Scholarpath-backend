import { Repository } from 'typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
export declare class UserProfilesService {
    private userProfileRepository;
    constructor(userProfileRepository: Repository<UserProfile>);
    create(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile>;
    findAll(): Promise<UserProfile[]>;
    findOne(id: number): Promise<UserProfile | null>;
    findByUserId(userId: number): Promise<UserProfile | null>;
    update(id: number, updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile>;
    remove(id: number): Promise<void>;
}
