import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from './users/entities/user.entity';
import { Category } from './categories/entities/category.entity';
import { Scholarship } from './scholarships/entities/scholarship.entity';
import { UserProfile } from './user-profiles/entities/user-profile.entity';
import { FormFillRequest } from './form-fill-requests/entities/form-fill-request.entity';
import { CyberCafe } from './cyber-cafes/entities/cyber-cafe.entity';

// Load environment variables from .env file
config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'scholarpath',
  entities: [User, Category, Scholarship, UserProfile, FormFillRequest, CyberCafe],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: true,
  extra: {
    max: 1, // Use only 1 connection for seed script to avoid connection issues
    idleTimeoutMillis: 10000, // Close idle connections after 10 seconds
    connectionTimeoutMillis: 5000, // Return an error after 5 seconds if connection could not be established
  },
});

