import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity('scholarships')
export class Scholarship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  link: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  amount: number;

  @Column({ default: 'all' })
  states: string; // 'all' or comma-separated state names

  @Column({ default: 'all' })
  applicableFor: string; // farmer, sc/st/obc, merit, woman, ews, etc.

  @ManyToOne(() => Category, (category) => category.scholarships)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  categoryId: number;

  // Eligibility criteria stored as JSON
  @Column('jsonb', { nullable: true })
  eligibilityRules: {
    minIncome?: number;
    maxIncome?: number;
    minAge?: number;
    maxAge?: number;
    minMarks10?: number;
    minMarks12?: number;
    caste?: string[]; // ['sc', 'st', 'obc', 'general']
    gender?: string; // 'male', 'female', 'all'
    landSize?: number; // max land in acres
    farmerType?: string[]; // ['marginal', 'small', 'large']
    loanStatus?: string; // 'yes', 'no', 'any'
    crop?: string[];
  };

  // Steps to fill form
  @Column('jsonb', { nullable: true })
  steps: Array<{
    title: string;
    items: string[];
  }>;

  @Column('jsonb', { nullable: true })
  requiredDocuments: string[];

  @Column({ nullable: true })
  pdfUrl: string;

  @Column({ nullable: true })
  videoUrl: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

