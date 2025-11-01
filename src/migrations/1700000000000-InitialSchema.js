"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1700000000000 = void 0;
var typeorm_1 = require("typeorm");
var InitialSchema1700000000000 = /** @class */ (function () {
    function InitialSchema1700000000000() {
    }
    InitialSchema1700000000000.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var scholarshipsTable, scholarshipsFkExists, userProfilesTable, userProfilesFkExists, formFillRequestsTable, formFillRequestsFkExists, usersTable, usersIndexExists, cyberCafesTable, cafesIndexExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Users table
                    return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                        }), true)];
                    case 1:
                        // Users table
                        _a.sent();
                        // Categories table
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                            }), true)];
                    case 2:
                        // Categories table
                        _a.sent();
                        // Scholarships table
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                            }), true)];
                    case 3:
                        // Scholarships table
                        _a.sent();
                        // User Profiles table
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                            }), true)];
                    case 4:
                        // User Profiles table
                        _a.sent();
                        // Form Fill Requests table
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                                    { name: 'requestType', type: 'varchar', length: '20' }, // 'online' or 'offline'
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
                            }), true)];
                    case 5:
                        // Form Fill Requests table
                        _a.sent();
                        // Cyber Cafes table
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                            }), true)];
                    case 6:
                        // Cyber Cafes table
                        _a.sent();
                        return [4 /*yield*/, queryRunner.getTable('scholarships')];
                    case 7:
                        scholarshipsTable = _a.sent();
                        scholarshipsFkExists = scholarshipsTable === null || scholarshipsTable === void 0 ? void 0 : scholarshipsTable.foreignKeys.some(function (fk) { return fk.columnNames.includes('categoryId'); });
                        if (!!scholarshipsFkExists) return [3 /*break*/, 9];
                        return [4 /*yield*/, queryRunner.createForeignKey('scholarships', new typeorm_1.TableForeignKey({
                                columnNames: ['categoryId'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'categories',
                                onDelete: 'CASCADE',
                            }))];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, queryRunner.getTable('user_profiles')];
                    case 10:
                        userProfilesTable = _a.sent();
                        userProfilesFkExists = userProfilesTable === null || userProfilesTable === void 0 ? void 0 : userProfilesTable.foreignKeys.some(function (fk) { return fk.columnNames.includes('userId'); });
                        if (!!userProfilesFkExists) return [3 /*break*/, 12];
                        return [4 /*yield*/, queryRunner.createForeignKey('user_profiles', new typeorm_1.TableForeignKey({
                                columnNames: ['userId'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'users',
                                onDelete: 'CASCADE',
                            }))];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, queryRunner.getTable('form_fill_requests')];
                    case 13:
                        formFillRequestsTable = _a.sent();
                        formFillRequestsFkExists = formFillRequestsTable === null || formFillRequestsTable === void 0 ? void 0 : formFillRequestsTable.foreignKeys.some(function (fk) { return fk.columnNames.includes('userId'); });
                        if (!!formFillRequestsFkExists) return [3 /*break*/, 15];
                        return [4 /*yield*/, queryRunner.createForeignKey('form_fill_requests', new typeorm_1.TableForeignKey({
                                columnNames: ['userId'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'users',
                                onDelete: 'CASCADE',
                            }))];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15: return [4 /*yield*/, queryRunner.getTable('users')];
                    case 16:
                        usersTable = _a.sent();
                        usersIndexExists = usersTable === null || usersTable === void 0 ? void 0 : usersTable.indices.some(function (idx) { return idx.name === 'IDX_USER_EMAIL'; });
                        if (!!usersIndexExists) return [3 /*break*/, 18];
                        return [4 /*yield*/, queryRunner.createIndex('users', new typeorm_1.TableIndex({
                                name: 'IDX_USER_EMAIL',
                                columnNames: ['email'],
                            }))];
                    case 17:
                        _a.sent();
                        _a.label = 18;
                    case 18: return [4 /*yield*/, queryRunner.getTable('cyber_cafes')];
                    case 19:
                        cyberCafesTable = _a.sent();
                        cafesIndexExists = cyberCafesTable === null || cyberCafesTable === void 0 ? void 0 : cyberCafesTable.indices.some(function (idx) { return idx.name === 'IDX_CAFE_LOCATION'; });
                        if (!!cafesIndexExists) return [3 /*break*/, 21];
                        return [4 /*yield*/, queryRunner.createIndex('cyber_cafes', new typeorm_1.TableIndex({
                                name: 'IDX_CAFE_LOCATION',
                                columnNames: ['latitude', 'longitude'],
                            }))];
                    case 20:
                        _a.sent();
                        _a.label = 21;
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    InitialSchema1700000000000.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable('form_fill_requests')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('cyber_cafes')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('user_profiles')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('scholarships')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('categories')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('users')];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return InitialSchema1700000000000;
}());
exports.InitialSchema1700000000000 = InitialSchema1700000000000;
