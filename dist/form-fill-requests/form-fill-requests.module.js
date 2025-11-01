"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFillRequestsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const form_fill_requests_service_1 = require("./form-fill-requests.service");
const form_fill_requests_controller_1 = require("./form-fill-requests.controller");
const form_fill_request_entity_1 = require("./entities/form-fill-request.entity");
let FormFillRequestsModule = class FormFillRequestsModule {
};
exports.FormFillRequestsModule = FormFillRequestsModule;
exports.FormFillRequestsModule = FormFillRequestsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([form_fill_request_entity_1.FormFillRequest])],
        controllers: [form_fill_requests_controller_1.FormFillRequestsController],
        providers: [form_fill_requests_service_1.FormFillRequestsService],
        exports: [form_fill_requests_service_1.FormFillRequestsService],
    })
], FormFillRequestsModule);
//# sourceMappingURL=form-fill-requests.module.js.map