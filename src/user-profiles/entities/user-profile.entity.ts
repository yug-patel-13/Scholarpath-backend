import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('user_profiles')
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  category: string; // farmer, sc/st/obc, merit, woman, ews

  // Personal Information
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  caste: string; // general, sc, st, obc, ebc

  @Column({ nullable: true })
  aadhaar: string;

  @Column({ nullable: true })
  phone: string;

  // Financial Information
  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  annualIncome: number;

  // Academic Information
  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  marks10: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  marks12: number;

  // Farmer-specific
  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  landSize: number; // in acres

  @Column({ nullable: true })
  crop: string;

  @Column({ nullable: true })
  farmerType: string; // marginal, small, large

  @Column({ nullable: true })
  loanStatus: string; // yes, no

  // Location
  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  pincode: string;

  // CMSS (Chief Minister Scholarship Scheme) Special Categories
  @Column({ type: 'boolean', default: false, nullable: true })
  lowLiteracyTaluka: boolean; // List of Taluka Having below 50 Literacy Rate

  @Column({ type: 'boolean', default: false, nullable: true })
  childrenOfMartyrs: boolean; // Children of martyrs (Shaheed Jawan)

  @Column({ type: 'boolean', default: false, nullable: true })
  shramikCard: boolean; // Formates of Shramik Card (Workers)

  @Column({ type: 'boolean', default: false, nullable: true })
  disabilityCertificate: boolean; // Disability Certificate

  @Column({ type: 'boolean', default: false, nullable: true })
  widowCertificate: boolean; // Widow Certificate

  @Column({ type: 'boolean', default: false, nullable: true })
  orphanCertificate: boolean; // Orphan Certificate

  @Column({ type: 'boolean', default: false, nullable: true })
  tyaktaCertificate: boolean; // Tyakta Certificate (abandoned/renounced)

  // Documents metadata
  @Column('jsonb', { nullable: true })
  documents: {
    aadhaar?: boolean;
    bank?: boolean;
    land?: boolean;
    income?: boolean;
    marksheet10?: boolean;
    marksheet12?: boolean;
    [key: string]: any;
  };

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

