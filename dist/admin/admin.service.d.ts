import { Repository } from 'typeorm';
import { FormFillRequest, RequestStatus } from '../form-fill-requests/entities/form-fill-request.entity';
import { User } from '../users/entities/user.entity';
import { Scholarship } from '../scholarships/entities/scholarship.entity';
import { Category } from '../categories/entities/category.entity';
import { CyberCafe } from '../cyber-cafes/entities/cyber-cafe.entity';
export declare class AdminService {
    private formFillRequestRepository;
    private userRepository;
    private scholarshipRepository;
    private categoryRepository;
    private cyberCafeRepository;
    constructor(formFillRequestRepository: Repository<FormFillRequest>, userRepository: Repository<User>, scholarshipRepository: Repository<Scholarship>, categoryRepository: Repository<Category>, cyberCafeRepository: Repository<CyberCafe>);
    getDashboardStats(): Promise<{
        totalRequests: number;
        pendingRequests: number;
        completedRequests: number;
        totalUsers: number;
        totalScholarships: number;
        totalCategories: number;
    }>;
    getAllRequests(): Promise<FormFillRequest[]>;
    updateRequestStatus(id: number, status: RequestStatus, adminNotes?: string): Promise<FormFillRequest>;
}
