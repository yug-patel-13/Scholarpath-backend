"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const form_fill_request_entity_1 = require("../form-fill-requests/entities/form-fill-request.entity");
const user_entity_1 = require("../users/entities/user.entity");
const scholarship_entity_1 = require("../scholarships/entities/scholarship.entity");
const category_entity_1 = require("../categories/entities/category.entity");
const cyber_cafe_entity_1 = require("../cyber-cafes/entities/cyber-cafe.entity");
let AdminService = class AdminService {
    constructor(formFillRequestRepository, userRepository, scholarshipRepository, categoryRepository, cyberCafeRepository) {
        this.formFillRequestRepository = formFillRequestRepository;
        this.userRepository = userRepository;
        this.scholarshipRepository = scholarshipRepository;
        this.categoryRepository = categoryRepository;
        this.cyberCafeRepository = cyberCafeRepository;
    }
    async getDashboardStats() {
        const [totalRequests, pendingRequests, completedRequests, totalUsers, totalScholarships, totalCategories] = await Promise.all([
            this.formFillRequestRepository.count(),
            this.formFillRequestRepository.count({ where: { status: form_fill_request_entity_1.RequestStatus.PENDING } }),
            this.formFillRequestRepository.count({ where: { status: form_fill_request_entity_1.RequestStatus.COMPLETED } }),
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
    async updateRequestStatus(id, status, adminNotes) {
        await this.formFillRequestRepository.update(id, { status, adminNotes });
        return this.formFillRequestRepository.findOne({ where: { id }, relations: ['user'] });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_fill_request_entity_1.FormFillRequest)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(scholarship_entity_1.Scholarship)),
    __param(3, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(4, (0, typeorm_1.InjectRepository)(cyber_cafe_entity_1.CyberCafe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map