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
exports.ScholarshipsController = void 0;
const common_1 = require("@nestjs/common");
const scholarships_service_1 = require("./scholarships.service");
const user_profiles_service_1 = require("../user-profiles/user-profiles.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ScholarshipsController = class ScholarshipsController {
    constructor(scholarshipsService, userProfilesService) {
        this.scholarshipsService = scholarshipsService;
        this.userProfilesService = userProfilesService;
    }
    findAll() {
        return this.scholarshipsService.findAll();
    }
    findByCategory(categoryId) {
        return this.scholarshipsService.findByCategory(+categoryId);
    }
    async findEligible(body) {
        const profile = await this.userProfilesService.findByUserId(body.userId);
        if (!profile) {
            return { message: 'Profile not found. Please fill your profile first.' };
        }
        return this.scholarshipsService.findEligible(profile);
    }
    findOne(id) {
        return this.scholarshipsService.findOne(+id);
    }
};
exports.ScholarshipsController = ScholarshipsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScholarshipsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('category/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScholarshipsController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('eligible'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScholarshipsController.prototype, "findEligible", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScholarshipsController.prototype, "findOne", null);
exports.ScholarshipsController = ScholarshipsController = __decorate([
    (0, common_1.Controller)('scholarships'),
    __metadata("design:paramtypes", [scholarships_service_1.ScholarshipsService,
        user_profiles_service_1.UserProfilesService])
], ScholarshipsController);
//# sourceMappingURL=scholarships.controller.js.map