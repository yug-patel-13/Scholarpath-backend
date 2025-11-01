import { CyberCafesService } from './cyber-cafes.service';
export declare class CyberCafesController {
    private readonly cyberCafesService;
    constructor(cyberCafesService: CyberCafesService);
    findAll(): Promise<import("./entities/cyber-cafe.entity").CyberCafe[]>;
    findNearest(latitude: string, longitude: string, limit?: string): Promise<import("./entities/cyber-cafe.entity").CyberCafe[]>;
    findOne(id: string): Promise<import("./entities/cyber-cafe.entity").CyberCafe>;
}
