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
exports.CyberCafesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cyber_cafe_entity_1 = require("./entities/cyber-cafe.entity");
let CyberCafesService = class CyberCafesService {
    constructor(cyberCafeRepository) {
        this.cyberCafeRepository = cyberCafeRepository;
    }
    async findAll() {
        return this.cyberCafeRepository.find({
            where: { isActive: true },
            order: { rating: 'DESC' },
        });
    }
    async findOne(id) {
        return this.cyberCafeRepository.findOne({ where: { id } });
    }
    async findNearest(latitude, longitude, limit = 10) {
        const cafes = await this.cyberCafeRepository.find({
            where: { isActive: true },
        });
        const cafesWithDistance = cafes.map((cafe) => {
            const distance = this.calculateDistance(latitude, longitude, cafe.latitude, cafe.longitude);
            return { ...cafe, distance };
        });
        return cafesWithDistance
            .sort((a, b) => a.distance - b.distance)
            .slice(0, limit)
            .map(({ distance, ...cafe }) => cafe);
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) *
                Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
};
exports.CyberCafesService = CyberCafesService;
exports.CyberCafesService = CyberCafesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cyber_cafe_entity_1.CyberCafe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CyberCafesService);
//# sourceMappingURL=cyber-cafes.service.js.map