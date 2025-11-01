"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const user_entity_1 = require("./users/entities/user.entity");
const category_entity_1 = require("./categories/entities/category.entity");
const scholarship_entity_1 = require("./scholarships/entities/scholarship.entity");
const user_profile_entity_1 = require("./user-profiles/entities/user-profile.entity");
const form_fill_request_entity_1 = require("./form-fill-requests/entities/form-fill-request.entity");
const cyber_cafe_entity_1 = require("./cyber-cafes/entities/cyber-cafe.entity");
(0, dotenv_1.config)();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'scholarpath',
    entities: [user_entity_1.User, category_entity_1.Category, scholarship_entity_1.Scholarship, user_profile_entity_1.UserProfile, form_fill_request_entity_1.FormFillRequest, cyber_cafe_entity_1.CyberCafe],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map