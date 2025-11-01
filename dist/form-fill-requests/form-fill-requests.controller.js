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
exports.FormFillRequestsController = void 0;
const common_1 = require("@nestjs/common");
const form_fill_requests_service_1 = require("./form-fill-requests.service");
const create_form_fill_request_dto_1 = require("./dto/create-form-fill-request.dto");
const update_form_fill_request_dto_1 = require("./dto/update-form-fill-request.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let FormFillRequestsController = class FormFillRequestsController {
    constructor(formFillRequestsService) {
        this.formFillRequestsService = formFillRequestsService;
    }
    create(createFormFillRequestDto) {
        return this.formFillRequestsService.create(createFormFillRequestDto);
    }
    findAll() {
        return this.formFillRequestsService.findAll();
    }
    findByUserId(userId) {
        return this.formFillRequestsService.findByUserId(+userId);
    }
    findOne(id) {
        return this.formFillRequestsService.findOne(+id);
    }
    update(id, updateFormFillRequestDto) {
        return this.formFillRequestsService.update(+id, updateFormFillRequestDto);
    }
    remove(id) {
        return this.formFillRequestsService.remove(+id);
    }
};
exports.FormFillRequestsController = FormFillRequestsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_form_fill_request_dto_1.CreateFormFillRequestDto]),
    __metadata("design:returntype", void 0)
], FormFillRequestsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormFillRequestsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormFillRequestsController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormFillRequestsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_form_fill_request_dto_1.UpdateFormFillRequestDto]),
    __metadata("design:returntype", void 0)
], FormFillRequestsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormFillRequestsController.prototype, "remove", null);
exports.FormFillRequestsController = FormFillRequestsController = __decorate([
    (0, common_1.Controller)('form-fill-requests'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [form_fill_requests_service_1.FormFillRequestsService])
], FormFillRequestsController);
//# sourceMappingURL=form-fill-requests.controller.js.map