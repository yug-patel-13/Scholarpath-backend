import { Scholarship } from '../../scholarships/entities/scholarship.entity';
export declare class Category {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    scholarships: Scholarship[];
}
