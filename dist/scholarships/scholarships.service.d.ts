import { Repository } from 'typeorm';
import { Scholarship } from './entities/scholarship.entity';
import { UserProfile } from '../user-profiles/entities/user-profile.entity';
export declare class ScholarshipsService {
    private scholarshipRepository;
    constructor(scholarshipRepository: Repository<Scholarship>);
    findAll(): Promise<Scholarship[]>;
    findOne(id: number): Promise<Scholarship | null>;
    findByCategory(categoryId: number): Promise<Scholarship[]>;
    findEligible(profile: UserProfile): Promise<Scholarship[]>;
    private checkEligibility;
}
