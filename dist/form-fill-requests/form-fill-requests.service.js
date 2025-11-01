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
exports.FormFillRequestsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const form_fill_request_entity_1 = require("./entities/form-fill-request.entity");
let FormFillRequestsService = class FormFillRequestsService {
    constructor(formFillRequestRepository) {
        this.formFillRequestRepository = formFillRequestRepository;
    }
    async create(createFormFillRequestDto) {
        const request = this.formFillRequestRepository.create(createFormFillRequestDto);
        return this.formFillRequestRepository.save(request);
    }
    async findAll() {
        return this.formFillRequestRepository.find({
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByUserId(userId) {
        return this.formFillRequestRepository.find({
            where: { userId },
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        return this.formFillRequestRepository.findOne({
            where: { id },
            relations: ['user'],
        });
    }
    async update(id, updateFormFillRequestDto) {
        await this.formFillRequestRepository.update(id, updateFormFillRequestDto);
        const updated = await this.findOne(id);
        if (!updated) {
            throw new Error('Request not found after update');
        }
        return updated;
    }
    async remove(id) {
        await this.formFillRequestRepository.delete(id);
    }
};
exports.FormFillRequestsService = FormFillRequestsService;
exports.FormFillRequestsService = FormFillRequestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_fill_request_entity_1.FormFillRequest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FormFillRequestsService);
//# sourceMappingURL=form-fill-requests.service.js.map