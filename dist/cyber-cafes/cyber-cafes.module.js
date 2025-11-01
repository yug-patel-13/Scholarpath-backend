"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CyberCafesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cyber_cafes_service_1 = require("./cyber-cafes.service");
const cyber_cafes_controller_1 = require("./cyber-cafes.controller");
const cyber_cafe_entity_1 = require("./entities/cyber-cafe.entity");
let CyberCafesModule = class CyberCafesModule {
};
exports.CyberCafesModule = CyberCafesModule;
exports.CyberCafesModule = CyberCafesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cyber_cafe_entity_1.CyberCafe])],
        controllers: [cyber_cafes_controller_1.CyberCafesController],
        providers: [cyber_cafes_service_1.CyberCafesService],
        exports: [cyber_cafes_service_1.CyberCafesService],
    })
], CyberCafesModule);
//# sourceMappingURL=cyber-cafes.module.js.map