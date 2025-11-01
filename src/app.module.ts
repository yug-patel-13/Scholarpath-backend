import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ScholarshipsModule } from './scholarships/scholarships.module';
import { CategoriesModule } from './categories/categories.module';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
import { FormFillRequestsModule } from './form-fill-requests/form-fill-requests.module';
import { CyberCafesModule } from './cyber-cafes/cyber-cafes.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'scholarpath',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production',
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: false,
      retryAttempts: 3,
      retryDelay: 3000,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    ScholarshipsModule,
    CategoriesModule,
    UserProfilesModule,
    FormFillRequestsModule,
    CyberCafesModule,
    AdminModule,
  ],
})
export class AppModule {}

