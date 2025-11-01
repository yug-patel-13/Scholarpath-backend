import { AdminService } from './admin.service';
import { RequestStatus } from '../form-fill-requests/entities/form-fill-request.entity';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getDashboardStats(): Promise<{
        totalRequests: number;
        pendingRequests: number;
        completedRequests: number;
        totalUsers: number;
        totalScholarships: number;
        totalCategories: number;
    }>;
    getAllRequests(): Promise<import("../form-fill-requests/entities/form-fill-request.entity").FormFillRequest[]>;
    updateRequestStatus(id: string, body: {
        status: RequestStatus;
        adminNotes?: string;
    }): Promise<import("../form-fill-requests/entities/form-fill-request.entity").FormFillRequest>;
}
