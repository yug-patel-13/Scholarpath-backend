"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1700000000000 = void 0;
const typeorm_1 = require("typeorm");
class InitialSchema1700000000000 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'email', type: 'varchar', length: '255', isUnique: true },
                { name: 'name', type: 'varchar', length: '255' },
                { name: 'password', type: 'varchar', length: '255' },
                { name: 'isAdmin', type: 'boolean', default: false },
                { name: 'phone', type: 'varchar', length: '20', isNullable: true },
                { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'name', type: 'varchar', length: '255', isUnique: true },
                { name: 'description', type: 'text', isNullable: true },
                { name: 'imageUrl', type: 'varchar', length: '500', isNullable: true },
                { name: 'isActive', type: 'boolean', default: true },
                { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'scholarships',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'title', type: 'varchar', length: '500' },
                { name: 'description', type: 'text' },
                { name: 'link', type: 'varchar', length: '500', isNullable: true },
                { name: 'amount', type: 'decimal', precision: 10, scale: 2, isNullable: true },
                { name: 'states', type: 'varchar', length: '500', default: "'all'" },
                { name: 'applicableFor', type: 'varchar', length: '100', default: "'all'" },
                { name: 'categoryId', type: 'int' },
                { name: 'eligibilityRules', type: 'jsonb', isNullable: true },
                { name: 'steps', type: 'jsonb', isNullable: true },
                { name: 'requiredDocuments', type: 'jsonb', isNullable: true },
                { name: 'pdfUrl', type: 'varchar', length: '500', isNullable: true },
                { name: 'videoUrl', type: 'varchar', length: '500', isNullable: true },
                { name: 'isActive', type: 'boolean', default: true },
                { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_profiles',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'userId', type: 'int', isUnique: true },
                { name: 'category', type: 'varchar', length: '100', isNullable: true },
                { name: 'name', type: 'varchar', length: '255', isNullable: true },
                { name: 'age', type: 'int', isNullable: true },
                { name: 'gender', type: 'varchar', length: '50', isNullable: true },
                { name: 'caste', type: 'varchar', length: '100', isNullable: true },
                { name: 'aadhaar', type: 'varchar', length: '20', isNullable: true },
                { name: 'phone', type: 'varchar', length: '20', isNullable: true },
                { name: 'annualIncome', type: 'decimal', precision: 10, scale: 2, isNullable: true },
                { name: 'marks10', type: 'decimal', precision: 5, scale: 2, isNullable: true },
                { name: 'marks12', type: 'decimal', precision: 5, scale: 2, isNullable: true },
                { name: 'landSize', type: 'decimal', precision: 10, scale: 2, isNullable: true },
                { name: 'crop', type: 'varchar', length: '100', isNullable: true },
                { name: 'farmerType', type: 'varchar', length: '50', isNullable: true },
                { name: 'loanStatus', type: 'varchar', length: '20', isNullable: true },
                { name: 'state', type: 'varchar', length: '100', isNullable: true },
                { name: 'district', type: 'varchar', length: '100', isNullable: true },
                { name: 'city', type: 'varchar', length: '100', isNullable: true },
                { name: 'pincode', type: 'varchar', length: '10', isNullable: true },
                { name: 'documents', type: 'jsonb', isNullable: true },
                { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'form_fill_requests',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'userId', type: 'int' },
                { name: 'requestType', type: 'varchar', length: '20' },
                {
                    name: 'status',
                    type: 'varchar',
                    length: '20',
                    default: "'pending'",
                },
                { name: 'scholarshipId', type: 'int', isNullable: true },
                { name: 'description', type: 'text', isNullable: true },
                { name: 'contactPhone', type: 'varchar', length: '20', isNullable: true },
                { name: 'contactEmail', type: 'varchar', length: '255', isNullable: true },
                { name: 'address', type: 'text', isNullable: true },
                { name: 'pincode', type: 'varchar', length: '10', isNullable: true },
                { name: 'preferredDate', type: 'timestamp', isNullable: true },
                { name: 'preferredTime', type: 'varchar', length: '50', isNullable: true },
                { name: 'additionalInfo', type: 'jsonb', isNullable: true },
                { name: 'adminNotes', type: 'text', isNullable: true },
                { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'cyber_cafes',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                { name: 'name', type: 'varchar', length: '255' },
                { name: 'description', type: 'text', isNullable: true },
                { name: 'address', type: 'text' },
                { name: 'city', type: 'varchar', length: '100', isNullable: true },
                { name: 'district', type: 'varchar', length: '100', isNullable: true },
                { name: 'state', type: 'varchar', length: '100' },
                { name: 'pincode', type: 'varchar', length: '10', isNullable: true },
                { name: 'latitude', type: 'decimal', precision: 10, scale: 8 },
                { name: 'longitude', type: 'decimal', precision: 11, scale: 8 },
                { name: 'phone', type: 'varchar', length: '20', isNullable: true },
                { name: 'email', type: 'varchar', length: '255', isNullable: true },
                { name: 'website', type: 'varchar', length: '500', isNullable: true },
                { name: 'isActive', type: 'boolean', default: true },
                { name: 'rating', type: 'decimal', precision: 5, scale: 2, isNullable: true },
                { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }), true);
        const scholarshipsTable = await queryRunner.getTable('scholarships');
        const scholarshipsFkExists = scholarshipsTable?.foreignKeys.some((fk) => fk.columnNames.includes('categoryId'));
        if (!scholarshipsFkExists) {
            await queryRunner.createForeignKey('scholarships', new typeorm_1.TableForeignKey({
                columnNames: ['categoryId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'categories',
                onDelete: 'CASCADE',
            }));
        }
        const userProfilesTable = await queryRunner.getTable('user_profiles');
        const userProfilesFkExists = userProfilesTable?.foreignKeys.some((fk) => fk.columnNames.includes('userId'));
        if (!userProfilesFkExists) {
            await queryRunner.createForeignKey('user_profiles', new typeorm_1.TableForeignKey({
                columnNames: ['userId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }));
        }
        const formFillRequestsTable = await queryRunner.getTable('form_fill_requests');
        const formFillRequestsFkExists = formFillRequestsTable?.foreignKeys.some((fk) => fk.columnNames.includes('userId'));
        if (!formFillRequestsFkExists) {
            await queryRunner.createForeignKey('form_fill_requests', new typeorm_1.TableForeignKey({
                columnNames: ['userId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }));
        }
        const usersTable = await queryRunner.getTable('users');
        const usersIndexExists = usersTable?.indices.some((idx) => idx.name === 'IDX_USER_EMAIL');
        if (!usersIndexExists) {
            await queryRunner.createIndex('users', new typeorm_1.TableIndex({
                name: 'IDX_USER_EMAIL',
                columnNames: ['email'],
            }));
        }
        const cyberCafesTable = await queryRunner.getTable('cyber_cafes');
        const cafesIndexExists = cyberCafesTable?.indices.some((idx) => idx.name === 'IDX_CAFE_LOCATION');
        if (!cafesIndexExists) {
            await queryRunner.createIndex('cyber_cafes', new typeorm_1.TableIndex({
                name: 'IDX_CAFE_LOCATION',
                columnNames: ['latitude', 'longitude'],
            }));
        }
    }
    async down(queryRunner) {
        await queryRunner.dropTable('form_fill_requests');
        await queryRunner.dropTable('cyber_cafes');
        await queryRunner.dropTable('user_profiles');
        await queryRunner.dropTable('scholarships');
        await queryRunner.dropTable('categories');
        await queryRunner.dropTable('users');
    }
}
exports.InitialSchema1700000000000 = InitialSchema1700000000000;
//# sourceMappingURL=1700000000000-InitialSchema.js.map