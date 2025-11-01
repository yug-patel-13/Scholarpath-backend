import { UserProfilesService } from './user-profiles.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
export declare class UserProfilesController {
    private readonly userProfilesService;
    constructor(userProfilesService: UserProfilesService);
    create(createUserProfileDto: CreateUserProfileDto): Promise<import("./entities/user-profile.entity").UserProfile>;
    findAll(): Promise<import("./entities/user-profile.entity").UserProfile[]>;
    findByUserId(userId: string): Promise<import("./entities/user-profile.entity").UserProfile>;
    findOne(id: string): Promise<import("./entities/user-profile.entity").UserProfile>;
    update(id: string, updateUserProfileDto: UpdateUserProfileDto): Promise<import("./entities/user-profile.entity").UserProfile>;
    remove(id: string): Promise<void>;
}
