import { Repository } from 'typeorm';
import { CyberCafe } from './entities/cyber-cafe.entity';
export declare class CyberCafesService {
    private cyberCafeRepository;
    constructor(cyberCafeRepository: Repository<CyberCafe>);
    findAll(): Promise<CyberCafe[]>;
    findOne(id: number): Promise<CyberCafe | null>;
    findNearest(latitude: number, longitude: number, limit?: number): Promise<CyberCafe[]>;
    private calculateDistance;
    private deg2rad;
}
