import { Category } from '../../categories/entities/category.entity';
export declare class Scholarship {
    id: number;
    title: string;
    description: string;
    link: string;
    amount: number;
    states: string;
    applicableFor: string;
    category: Category;
    categoryId: number;
    eligibilityRules: {
        minIncome?: number;
        maxIncome?: number;
        minAge?: number;
        maxAge?: number;
        minMarks10?: number;
        minMarks12?: number;
        caste?: string[];
        gender?: string;
        landSize?: number;
        farmerType?: string[];
        loanStatus?: string;
        crop?: string[];
    };
    steps: Array<{
        title: string;
        items: string[];
    }>;
    requiredDocuments: string[];
    pdfUrl: string;
    videoUrl: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
