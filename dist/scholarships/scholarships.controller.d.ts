import { ScholarshipsService } from './scholarships.service';
import { UserProfilesService } from '../user-profiles/user-profiles.service';
export declare class ScholarshipsController {
    private readonly scholarshipsService;
    private readonly userProfilesService;
    constructor(scholarshipsService: ScholarshipsService, userProfilesService: UserProfilesService);
    findAll(): Promise<import("./entities/scholarship.entity").Scholarship[]>;
    findByCategory(categoryId: string): Promise<import("./entities/scholarship.entity").Scholarship[]>;
    findEligible(body: {
        userId: number;
    }): Promise<import("./entities/scholarship.entity").Scholarship[] | {
        message: string;
    }>;
    findOne(id: string): Promise<import("./entities/scholarship.entity").Scholarship>;
}
