import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormFillRequest, RequestStatus } from '../form-fill-requests/entities/form-fill-request.entity';
import { User } from '../users/entities/user.entity';
import { Scholarship } from '../scholarships/entities/scholarship.entity';
import { Category } from '../categories/entities/category.entity';
import { CyberCafe } from '../cyber-cafes/entities/cyber-cafe.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(FormFillRequest)
    private formFillRequestRepository: Repository<FormFillRequest>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Scholarship)
    private scholarshipRepository: Repository<Scholarship>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(CyberCafe)
    private cyberCafeRepository: Repository<CyberCafe>,
  ) {}

  async getDashboardStats() {
    const [totalRequests, pendingRequests, completedRequests, totalUsers, totalScholarships, totalCategories] =
      await Promise.all([
        this.formFillRequestRepository.count(),
        this.formFillRequestRepository.count({ where: { status: RequestStatus.PENDING } }),
        this.formFillRequestRepository.count({ where: { status: RequestStatus.COMPLETED } }),
        this.userRepository.count(),
        this.scholarshipRepository.count({ where: { isActive: true } }),
        this.categoryRepository.count({ where: { isActive: true } }),
      ]);

    return {
      totalRequests,
      pendingRequests,
      completedRequests,
      totalUsers,
      totalScholarships,
      totalCategories,
    };
  }

  async getAllRequests() {
    return this.formFillRequestRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async updateRequestStatus(id: number, status: RequestStatus, adminNotes?: string) {
    await this.formFillRequestRepository.update(id, { status, adminNotes });
    return this.formFillRequestRepository.findOne({ where: { id }, relations: ['user'] });
  }
}





