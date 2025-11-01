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
require("reflect-metadata");
var data_source_1 = require("../data-source");
var category_entity_1 = require("../categories/entities/category.entity");
var scholarship_entity_1 = require("../scholarships/entities/scholarship.entity");
var cyber_cafe_entity_1 = require("../cyber-cafes/entities/cyber-cafe.entity");
var bcrypt = require("bcryptjs");
var user_entity_1 = require("../users/entities/user.entity");
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var categoryRepo, scholarshipRepo, cyberCafeRepo, userRepo, categories, savedCategories, farmerCategory, scstCategory, meritCategory, womanCategory, ewsCategory, scholarships, _i, scholarships_1, sch, cafes, _a, cafes_1, cafe, existing, adminUser, hashedPassword;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, data_source_1.AppDataSource.initialize()];
                case 1:
                    _b.sent();
                    categoryRepo = data_source_1.AppDataSource.getRepository(category_entity_1.Category);
                    scholarshipRepo = data_source_1.AppDataSource.getRepository(scholarship_entity_1.Scholarship);
                    cyberCafeRepo = data_source_1.AppDataSource.getRepository(cyber_cafe_entity_1.CyberCafe);
                    userRepo = data_source_1.AppDataSource.getRepository(user_entity_1.User);
                    // Seed Categories
                    console.log('Seeding categories...');
                    categories = [
                        {
                            name: 'Farmer',
                            description: 'Benefits and scholarships for farmers',
                            imageUrl: '/farmer.jpg',
                            isActive: true,
                        },
                        {
                            name: 'SC/ST/OBC',
                            description: 'Scholarships for Scheduled Castes, Scheduled Tribes, and Other Backward Classes',
                            imageUrl: '/sc.jpg',
                            isActive: true,
                        },
                        {
                            name: 'Merit Based',
                            description: 'Merit-based scholarships for high-performing students',
                            imageUrl: '/merit.webp',
                            isActive: true,
                        },
                        {
                            name: 'Women',
                            description: 'Scholarships specifically for women students',
                            imageUrl: '/woman.jpg',
                            isActive: true,
                        },
                        {
                            name: 'EWS',
                            description: 'Economically Weaker Section scholarships',
                            imageUrl: '/ews.jpg',
                            isActive: true,
                        },
                    ];
                    return [4 /*yield*/, Promise.all(categories.map(function (cat) { return __awaiter(_this, void 0, void 0, function () {
                            var existing;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, categoryRepo.findOne({ where: { name: cat.name } })];
                                    case 1:
                                        existing = _a.sent();
                                        if (!!existing) return [3 /*break*/, 3];
                                        return [4 /*yield*/, categoryRepo.save(categoryRepo.create(cat))];
                                    case 2:
                                        existing = _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/, existing];
                                }
                            });
                        }); }))];
                case 2:
                    savedCategories = _b.sent();
                    // Seed Scholarships with comprehensive Indian scholarships
                    console.log('Seeding scholarships...');
                    farmerCategory = savedCategories.find(function (c) { return c.name === 'Farmer'; });
                    scstCategory = savedCategories.find(function (c) { return c.name === 'SC/ST/OBC'; });
                    meritCategory = savedCategories.find(function (c) { return c.name === 'Merit Based'; });
                    womanCategory = savedCategories.find(function (c) { return c.name === 'Women'; });
                    ewsCategory = savedCategories.find(function (c) { return c.name === 'EWS'; });
                    scholarships = [
                        // ========== FARMER SCHOLARSHIPS ==========
                        {
                            title: 'PM Kisan Samman Nidhi (PM-KISAN)',
                            description: 'Direct income support of Rs. 6,000 per year (Rs. 2,000 per installment) in 3 equal installments to all landholding farmer families. The scheme defines landholding families as those with cultivable land up to 2 hectares in their name.',
                            link: 'https://pmkisan.gov.in/',
                            amount: 6000,
                            states: 'all',
                            applicableFor: 'farmer',
                            categoryId: farmerCategory === null || farmerCategory === void 0 ? void 0 : farmerCategory.id,
                            eligibilityRules: {
                                maxIncome: null, // No income limit for PM-KISAN
                                maxLandSize: 2,
                                minAge: 18,
                                farmerType: ['marginal', 'small'],
                            },
                            steps: [
                                {
                                    title: 'Required Documents',
                                    items: [
                                        'Aadhaar Card (mandatory)',
                                        'Bank Account Details (passbook/cancelled cheque)',
                                        'Land Ownership Documents (Khatauni/Registry)',
                                        'Mobile Number (linked with Aadhaar)',
                                        'Passport Size Photo (optional)',
                                    ],
                                },
                                {
                                    title: 'Registration Steps',
                                    items: [
                                        'Visit PM-KISAN official website: https://pmkisan.gov.in/',
                                        'Click on "Farmer Corner" → "Beneficiary Status" or "Registration"',
                                        'Enter your Aadhaar number and complete OTP verification',
                                        'Fill personal details exactly as per Aadhaar',
                                        'Enter land details (survey/khasra numbers and area in hectares)',
                                        'Upload land ownership documents (Registry/Khatauni)',
                                        'Provide bank account details (Account Number, IFSC Code)',
                                        'Upload bank passbook or cancelled cheque',
                                        'Review all information and submit',
                                    ],
                                },
                                {
                                    title: 'Verification Process',
                                    items: [
                                        'Application verified by State/District Agriculture Department',
                                        'Land records cross-checked with revenue department',
                                        'Bank account verified',
                                        'Approval notification sent via SMS',
                                    ],
                                },
                                {
                                    title: 'Receiving Payment',
                                    items: [
                                        'Installment credited directly to registered bank account',
                                        'Check status at https://pmkisan.gov.in/ → "Beneficiary Status"',
                                        'Contact CSC or District Agriculture Officer if payment delayed',
                                        'Keep application reference number safe for tracking',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'bank_passbook', 'land_document', 'mobile_number'],
                            isActive: true,
                        },
                        {
                            title: 'Kisan Credit Card (KCC) Scheme',
                            description: 'Credit card facility for farmers providing short-term credit up to Rs. 3 lakh at 4% interest per annum. Covers production credit, working capital, and consumption needs. Interest subvention of 2% per annum and prompt repayment incentive of 3% per annum.',
                            link: 'https://www.myscheme.gov.in/schemes/kcc',
                            amount: 300000,
                            states: 'all',
                            applicableFor: 'farmer',
                            categoryId: farmerCategory === null || farmerCategory === void 0 ? void 0 : farmerCategory.id,
                            eligibilityRules: {
                                maxIncome: null,
                                minAge: 18,
                                maxAge: 65,
                                farmerType: ['marginal', 'small', 'large'],
                            },
                            steps: [
                                {
                                    title: 'Eligibility Check',
                                    items: [
                                        'Must be a farmer (owner/cultivator/tenant/tenant farmer)',
                                        'Age between 18-65 years',
                                        'Must have land ownership documents or lease agreement',
                                        'Should not have any existing defaulted loans',
                                    ],
                                },
                                {
                                    title: 'Required Documents',
                                    items: [
                                        'Aadhaar Card',
                                        'PAN Card (if available)',
                                        'Land Ownership Documents (Registry/Khatauni)',
                                        'Bank Account Details',
                                        'Income Certificate (optional)',
                                        'Passport Size Photos (2 copies)',
                                        'Identity Proof (Voter ID/Driving License)',
                                        'Address Proof',
                                    ],
                                },
                                {
                                    title: 'Application Process',
                                    items: [
                                        'Visit nearest bank branch (Nationalized/Rural Bank/Cooperative Bank)',
                                        'Fill KCC application form (available at bank or download online)',
                                        'Submit all required documents',
                                        'Bank verifies land ownership and credit history',
                                        'KCC card issued within 15-30 days if approved',
                                    ],
                                },
                                {
                                    title: 'After Approval',
                                    items: [
                                        'Collect KCC card from bank',
                                        'Card can be used at ATM and for online transactions',
                                        'Withdraw funds as per approved credit limit',
                                        'Repay within stipulated time to get interest subvention',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'pan_card', 'land_document', 'bank_account', 'identity_proof', 'address_proof'],
                            isActive: true,
                        },
                        {
                            title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
                            description: 'Crop insurance scheme providing comprehensive risk coverage against crop loss due to natural calamities, pests, and diseases. Premium rates: 2% for Kharif crops, 1.5% for Rabi crops, and 5% for commercial/horticultural crops. Government pays remaining premium.',
                            link: 'https://pmfby.gov.in/',
                            amount: null,
                            states: 'all',
                            applicableFor: 'farmer',
                            categoryId: farmerCategory === null || farmerCategory === void 0 ? void 0 : farmerCategory.id,
                            eligibilityRules: {
                                maxIncome: null,
                                minAge: 18,
                                farmerType: ['marginal', 'small', 'large'],
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit PMFBY portal: https://pmfby.gov.in/',
                                        'Click on "Farmer Corner" → "Apply for Insurance"',
                                        'Enter Aadhaar number and verify OTP',
                                        'Select crop, season (Kharif/Rabi), and area',
                                        'Enter bank account details for claim settlement',
                                    ],
                                },
                                {
                                    title: 'Premium Payment',
                                    items: [
                                        'Pay premium at bank/Common Service Centre (CSC)',
                                        'Keep premium receipt safe',
                                        'Government will credit subsidy directly',
                                    ],
                                },
                                {
                                    title: 'Claim Process',
                                    items: [
                                        'In case of crop loss, inform insurance company within 72 hours',
                                        'Crop cutting experiment conducted by Agriculture Department',
                                        'Claim amount credited to registered bank account if loss exceeds threshold',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'bank_account', 'land_document', 'crop_details'],
                            isActive: true,
                        },
                        {
                            title: 'Kisan Samman Nidhi - Additional Benefits',
                            description: 'Additional benefits for farmers including interest subvention on loans, direct benefit transfer for seeds and fertilizers, and support for organic farming initiatives.',
                            link: 'https://www.agriculture.gov.in/',
                            amount: null,
                            states: 'all',
                            applicableFor: 'farmer',
                            categoryId: farmerCategory === null || farmerCategory === void 0 ? void 0 : farmerCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000,
                                minAge: 18,
                                farmerType: ['marginal', 'small'],
                            },
                            steps: [
                                {
                                    title: 'Apply for Benefits',
                                    items: [
                                        'Visit state agriculture department website',
                                        'Register with Aadhaar and bank details',
                                        'Apply for specific benefit schemes (seeds, fertilizers, organic farming)',
                                        'Upload required documents',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'bank_account', 'farmer_certificate'],
                            isActive: true,
                        },
                        // ========== SC/ST/OBC SCHOLARSHIPS ==========
                        {
                            title: 'Post-Matric Scholarship for SC/ST Students',
                            description: 'Scholarship for SC/ST students pursuing post-matriculation/post-secondary courses. Maintenance allowance, reimbursement of non-refundable fees, study tour charges, thesis typing/printing charges, and book allowance. Family income should not exceed Rs. 2.5 lakh per annum.',
                            link: 'https://scholarships.gov.in/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                caste: ['sc', 'st'],
                                minMarks10: 50,
                                minMarks12: 50,
                                minAge: 15,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit National Scholarship Portal: https://scholarships.gov.in/',
                                        'Click on "New Registration" and select "Post-Matric Scholarship"',
                                        'Register with Aadhaar number and verify via OTP',
                                        'Fill personal details, academic details, and bank account information',
                                        'Select course and institution details',
                                    ],
                                },
                                {
                                    title: 'Document Upload',
                                    items: [
                                        'Upload scanned copy of caste certificate (SC/ST)',
                                        'Upload income certificate (issued by Tehsildar/SDM)',
                                        'Upload previous year mark sheet (10th/12th/Graduation)',
                                        'Upload Aadhaar card',
                                        'Upload bank account details (passbook first page)',
                                        'Upload admission proof (fee receipt/admission letter)',
                                        'Upload passport size photo',
                                        'Upload self-attested copy of all documents',
                                    ],
                                },
                                {
                                    title: 'Application Submission',
                                    items: [
                                        'Review all uploaded documents',
                                        'Submit application online',
                                        'Note down application ID for future reference',
                                        'Application forwarded to State Department for verification',
                                    ],
                                },
                                {
                                    title: 'Verification & Approval',
                                    items: [
                                        'Institute/District Officer verifies documents',
                                        'State Department approves eligible applications',
                                        'Scholarship amount credited to bank account',
                                        'Track status at portal using Application ID',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'caste_certificate', 'income_certificate', 'marksheet_10th', 'marksheet_12th', 'bank_account', 'admission_proof', 'passport_photo'],
                            isActive: true,
                        },
                        {
                            title: 'Pre-Matric Scholarship for SC/ST Students',
                            description: 'Scholarship for SC/ST students studying in classes 9th and 10th. Provides maintenance allowance, reimbursement of compulsory non-refundable fees, and ad-hoc grant. Family income should not exceed Rs. 2.5 lakh per annum.',
                            link: 'https://scholarships.gov.in/',
                            amount: 30000,
                            states: 'all',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                caste: ['sc', 'st'],
                                maxAge: 25,
                                minMarks10: null,
                            },
                            steps: [
                                {
                                    title: 'Apply Online',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register with Aadhaar',
                                        'Select "Pre-Matric Scholarship"',
                                        'Fill application form',
                                        'Upload caste certificate and income certificate',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'caste_certificate', 'income_certificate', 'marksheet', 'school_admission'],
                            isActive: true,
                        },
                        {
                            title: 'OBC Post-Matric Scholarship',
                            description: 'Scholarship for OBC students pursuing post-matriculation courses. Family income should not exceed Rs. 2.5 lakh per annum. Covers maintenance allowance, tuition fees, and other charges.',
                            link: 'https://scholarships.gov.in/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                caste: ['obc'],
                                minMarks10: 50,
                                minMarks12: 50,
                                minAge: 15,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Application Process',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register and select "OBC Post-Matric Scholarship"',
                                        'Upload OBC certificate, income certificate, and mark sheets',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'obc_certificate', 'income_certificate', 'marksheet', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Top Class Education Scheme for SC Students',
                            description: 'Scholarship for SC students pursuing studies in top-class institutions (recognized by MHRD). Full tuition fees, maintenance allowance, and other charges covered. Family income should not exceed Rs. 6 lakh per annum.',
                            link: 'https://scholarships.gov.in/',
                            amount: 200000,
                            states: 'all',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000,
                                caste: ['sc'],
                                minMarks12: 75,
                                minAge: 17,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Eligibility & Application',
                                    items: [
                                        'Must be admitted to top-class institution (IITs, NITs, AIIMS, etc.)',
                                        'Family income below Rs. 6 lakh',
                                        'Minimum 75% marks in 12th',
                                        'Apply through National Scholarship Portal',
                                        'Upload SC certificate, income certificate, admission proof',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'sc_certificate', 'income_certificate', 'marksheet_12th', 'admission_proof_top_institution', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Mukhyamantri Yuva Swavlamban Yojana (MYSY) - Gujarat',
                            description: 'Merit scholarship for SC/ST/OBC/SEBC students of Gujarat with 80% or above in 10th/12th. Family income below Rs. 6 lakh. Covers tuition fees, maintenance allowance, and book allowance.',
                            link: 'https://mysy.guj.nic.in/',
                            amount: 150000,
                            states: 'Gujarat',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000,
                                caste: ['sc', 'st', 'obc'],
                                minMarks10: 80,
                                minMarks12: 80,
                                minAge: 16,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit MYSY portal: https://mysy.guj.nic.in/',
                                        'Click on "New Registration"',
                                        'Register with Aadhaar and verify',
                                        'Select scholarship type (MYSY)',
                                        'Fill all academic and personal details',
                                    ],
                                },
                                {
                                    title: 'Document Upload',
                                    items: [
                                        'Upload caste certificate (SC/ST/OBC)',
                                        'Upload income certificate (family income ≤ Rs. 6 lakh)',
                                        'Upload 10th and 12th mark sheets (showing 80%+ marks)',
                                        'Upload admission proof (fee receipt)',
                                        'Upload Aadhaar card',
                                        'Upload bank account details',
                                    ],
                                },
                                {
                                    title: 'Verification',
                                    items: [
                                        'Application verified by college/institute',
                                        'District Education Officer verifies documents',
                                        'State Department approves',
                                        'Amount credited to bank account',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'caste_certificate', 'income_certificate', 'marksheet_10th_80percent', 'marksheet_12th_80percent', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojana - Maharashtra',
                            description: 'Scholarship for SC/ST/OBC students of Maharashtra. Family income below Rs. 8 lakh. Covers tuition fees, examination fees, and other charges for higher education.',
                            link: 'https://mahadbt.gov.in/',
                            amount: 100000,
                            states: 'Maharashtra',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 800000,
                                caste: ['sc', 'st', 'obc'],
                                minMarks12: 60,
                            },
                            steps: [
                                {
                                    title: 'Apply Online',
                                    items: [
                                        'Visit MahaDBT portal',
                                        'Register and apply for scholarship',
                                        'Upload caste certificate and income certificate',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'caste_certificate', 'income_certificate', 'marksheet', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Digital Gujarat Scholarship',
                            description: 'Scholarship for SC/ST/OBC students of Gujarat with 65% marks and family income below Rs. 25 lakh. Covers tuition fees, maintenance allowance, and other benefits.',
                            link: 'https://www.digitalgujarat.gov.in/',
                            amount: 100000,
                            states: 'Gujarat',
                            applicableFor: 'sc/st/obc',
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 2500000,
                                minMarks10: 65,
                                minMarks12: 65,
                                caste: ['sc', 'st', 'obc'],
                            },
                            steps: [
                                {
                                    title: 'Application Process',
                                    items: [
                                        'Visit Digital Gujarat portal',
                                        'Register with Aadhaar',
                                        'Select scholarship scheme',
                                        'Upload caste certificate, income certificate, and mark sheets',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'caste_certificate', 'income_certificate', 'marksheet', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Chief Minister Scholarship Scheme (CMSS) - Gujarat (SC/ST/OBC/General)',
                            description: 'Gujarat Chief Minister Scholarship Scheme (CMSS) provides financial assistance to SC/ST/OBC students and General category students who belong to any of the 7 special categories. The scheme has 7 special categories: 1) Students from Taluka with below 50% literacy rate, 2) Children of Martyrs (Shaheed Jawan), 3) Students with Shramik Card (Workers), 4) Students with Disability Certificate, 5) Children of Widows, 6) Orphan Students, 7) Children with Tyakta Certificate (abandoned/renounced). Available for SC/ST/OBC students OR General category students meeting any of the 7 special category criteria. Minimum 60% marks in 10th and 12th required. Family income should not exceed Rs. 4.5-6 lakh depending on category. Provides 50% tuition fee assistance up to Rs. 25,000-50,000 per year, plus hostel/food allowance and book assistance.',
                            link: 'https://scholarships.gujarat.gov.in/',
                            amount: 50000,
                            states: 'Gujarat',
                            applicableFor: 'sc/st/obc', // Also eligible for SC/ST/OBC students
                            categoryId: scstCategory === null || scstCategory === void 0 ? void 0 : scstCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000, // Rs. 6 lakh (Rs. 4.5 lakh for SC/ST/OBC)
                                minMarks10: 60,
                                minMarks12: 60,
                                minAge: 17,
                                maxAge: 30,
                                caste: ['sc', 'st', 'obc', 'general'], // Also available for General if they meet special category criteria
                            },
                            steps: [
                                {
                                    title: 'Eligibility Check - For SC/ST/OBC Students',
                                    items: [
                                        'SC/ST/OBC students are automatically eligible if they meet basic criteria',
                                        'OR General category students must belong to one of 7 special categories:',
                                        '1. Low Literacy Taluka (<50% literacy rate)',
                                        '2. Children of Martyrs (Shaheed Jawan)',
                                        '3. Shramik Card Holders (Workers)',
                                        '4. Disability Certificate holders',
                                        '5. Children of Widows',
                                        '6. Orphan Students',
                                        '7. Tyakta Certificate (abandoned children)',
                                        'Must be domicile of Gujarat, minimum 60% marks in 10th and 12th, family income ≤ Rs. 4.5-6 lakh',
                                    ],
                                },
                                {
                                    title: 'Obtain Required Certificate',
                                    items: [
                                        'For SC/ST/OBC: Upload valid caste certificate',
                                        'For General with Special Category: Upload relevant certificate (as per your special category)',
                                        'For Low Literacy Taluka: Verify Taluka from official list on scholarships.gujarat.gov.in',
                                        'For Martyrs\' Children: Shaheed Jawan certificate from district administration',
                                        'For Workers: Shramik Card from labor department',
                                        'For Disability: Disability certificate (minimum 40% disability)',
                                        'For Widow\'s Children: Widow certificate from Tehsildar/BDO office',
                                        'For Orphan: Orphan certificate from Child Welfare Committee',
                                        'For Tyakta: Tyakta certificate from district administration',
                                    ],
                                },
                                {
                                    title: 'Registration on Gujarat Scholarships Portal',
                                    items: [
                                        'Visit official Gujarat Scholarships portal: https://scholarships.gujarat.gov.in/',
                                        'Click on "Chief Minister Scholarship Scheme (CMSS)"',
                                        'Select your category: SC/ST/OBC OR General with special category',
                                        'If General, select your special category from the 7 categories',
                                        'Click on "New Registration" or "Login"',
                                        'Register with Aadhaar number and verify via OTP',
                                        'Fill personal details, caste/special category, and family income information',
                                    ],
                                },
                                {
                                    title: 'Document Upload',
                                    items: [
                                        'Upload caste certificate (for SC/ST/OBC applicants)',
                                        'Upload special category certificate (for General category applicants - widow/orphan/disability/etc.)',
                                        'Upload income certificate (family income ≤ Rs. 4.5 lakh for SC/ST/OBC, Rs. 6 lakh for others)',
                                        'Upload 10th standard mark sheet (showing minimum 60% marks)',
                                        'Upload 12th standard mark sheet (showing minimum 60% marks)',
                                        'Upload current admission proof from recognized institution in Gujarat',
                                        'Upload domicile certificate of Gujarat',
                                        'Upload Aadhaar card',
                                        'Upload bank account details (passbook/cancelled cheque)',
                                        'Upload passport size photograph',
                                        'Upload fee receipt from institution',
                                    ],
                                },
                                {
                                    title: 'Application Submission',
                                    items: [
                                        'Fill all educational details (diploma/UG/PG course information)',
                                        'Enter institution details (government/private/self-financed)',
                                        'Enter course fee details',
                                        'If applying under Low Literacy Taluka category, verify Taluka name from official list',
                                        'Review all information and uploaded documents',
                                        'Submit application online',
                                        'Save Application ID/Reference Number for tracking',
                                        'Take printout of submitted application',
                                    ],
                                },
                                {
                                    title: 'Verification & Disbursement',
                                    items: [
                                        'District Education Officer verifies caste certificate (for SC/ST/OBC)',
                                        'District verifies special category certificate (for General category applicants)',
                                        'District verifies income certificate and domicile status',
                                        'Institution verifies admission and academic marks (minimum 60%)',
                                        'For Low Literacy Taluka: Verify Taluka is in official list of Talukas with <50% literacy',
                                        'State Education Department cross-checks all documents',
                                        'Eligible applications are approved',
                                        'Scholarship amount (50% tuition fee up to Rs. 25,000-50,000) credited to bank account',
                                        'Hostel and food allowance (Rs. 1,200/month) for students outside native taluka',
                                        'Book and instrument assistance provided in first year',
                                        'Track application status using Application ID at scholarships.gujarat.gov.in',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'caste_certificate', 'special_category_certificate', 'income_certificate', 'gujarat_domicile', 'marksheet_10th_60percent', 'marksheet_12th_60percent', 'admission_proof', 'institution_fee_receipt', 'bank_account', 'passport_photo'],
                            isActive: true,
                        },
                        // ========== MERIT BASED SCHOLARSHIPS ==========
                        {
                            title: 'Mukhyamantri Yuva Swavlamban Yojana (MYSY) - Merit',
                            description: 'Merit scholarship for students with 80% or above in 12th with family income below Rs. 6 lakh. Available for all courses including Medical, Engineering, Pharmacy, Law, etc. Provides full tuition fees, maintenance allowance, and book allowance.',
                            link: 'https://mysy.guj.nic.in/',
                            amount: 200000,
                            states: 'Gujarat',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000,
                                minMarks12: 80,
                                minAge: 16,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit MYSY portal: https://mysy.guj.nic.in/',
                                        'Click on "New Registration"',
                                        'Register with Aadhaar number and verify via OTP',
                                        'Fill personal details, academic details, and course information',
                                        'Enter bank account details for scholarship credit',
                                    ],
                                },
                                {
                                    title: 'Document Upload',
                                    items: [
                                        'Upload 10th mark sheet (showing 80% or above)',
                                        'Upload 12th mark sheet (showing 80% or above)',
                                        'Upload income certificate (family income ≤ Rs. 6 lakh)',
                                        'Upload Aadhaar card',
                                        'Upload admission proof (fee receipt from college)',
                                        'Upload bank passbook first page',
                                        'Upload passport size photo',
                                        'Upload self-attested copies of all documents',
                                    ],
                                },
                                {
                                    title: 'Application Submission',
                                    items: [
                                        'Review all information and documents',
                                        'Submit application online',
                                        'Save Application ID for tracking',
                                        'Application forwarded to college for verification',
                                    ],
                                },
                                {
                                    title: 'Verification & Disbursement',
                                    items: [
                                        'College verifies academic details and admission',
                                        'District Education Officer verifies income certificate',
                                        'State Department approves eligible applications',
                                        'Scholarship amount credited directly to bank account',
                                        'Track status using Application ID at portal',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'marksheet_10th_80percent', 'marksheet_12th_80percent', 'income_certificate', 'admission_proof', 'bank_account', 'passport_photo'],
                            isActive: true,
                        },
                        {
                            title: 'Central Sector Scheme of Scholarship (CSSS)',
                            description: 'Merit scholarship for students who have passed Class XII from CBSE/ICSE/State Boards with 80% or above marks. Family income below Rs. 8 lakh. Provides Rs. 10,000 per month for first 3 years and Rs. 20,000 per month for remaining years of graduation/post-graduation.',
                            link: 'https://scholarships.gov.in/',
                            amount: 1440000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 800000,
                                minMarks12: 80,
                                minAge: 17,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register with Aadhaar',
                                        'Select "Central Sector Scheme of Scholarship"',
                                        'Fill application form with academic details',
                                        'Upload required documents',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'marksheet_12th_80percent', 'income_certificate', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Prime Minister Scholarship Scheme (PMSS)',
                            description: 'Scholarship for wards of ex-servicemen/widows. Minimum 60% marks in 10th and 12th. Family income below Rs. 6 lakh for technical courses and Rs. 3.5 lakh for non-technical courses.',
                            link: 'https://www.ksb.gov.in/',
                            amount: 300000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000,
                                minMarks10: 60,
                                minMarks12: 60,
                            },
                            steps: [
                                {
                                    title: 'Apply Online',
                                    items: [
                                        'Visit Kendriya Sainik Board website',
                                        'Register and apply',
                                        'Upload ex-servicemen certificate, income certificate, and mark sheets',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'ex_servicemen_certificate', 'income_certificate', 'marksheet', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'AICTE Pragati Scholarship for Girls',
                            description: 'Scholarship for girl students pursuing technical education. Family income below Rs. 8 lakh. Provides Rs. 50,000 per year. Minimum 50% marks in qualifying examination.',
                            link: 'https://www.aicte-india.org/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 800000,
                                gender: 'female',
                                minMarks10: 50,
                                minMarks12: 50,
                            },
                            steps: [
                                {
                                    title: 'Application',
                                    items: [
                                        'Visit AICTE portal',
                                        'Register and apply',
                                        'Upload income certificate, mark sheets, and admission proof',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Merit Scholarship for General Category',
                            description: 'Merit scholarship for general category students with 85% or above marks and family income below Rs. 2.5 lakh. Available for various states and institutions.',
                            link: 'https://scholarships.gov.in/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                caste: ['general'],
                                minMarks12: 85,
                            },
                            steps: [
                                {
                                    title: 'Apply',
                                    items: [
                                        'Visit National Scholarship Portal or State Scholarship Portal',
                                        'Register and select merit scholarship',
                                        'Upload income certificate and mark sheets',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet_12th_85percent', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Pre-Matric Scholarship Scheme',
                            description: 'Scholarship for students studying in Class 9th and 10th. Family income below Rs. 2.5 lakh. Provides maintenance allowance and book allowance.',
                            link: 'https://scholarships.gov.in/',
                            amount: 15000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                minMarks10: 50,
                                minAge: 14,
                                maxAge: 18,
                            },
                            steps: [
                                {
                                    title: 'Apply Online',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register with Aadhaar',
                                        'Select Pre-Matric Scholarship',
                                        'Upload income certificate and 9th mark sheet',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet_9th', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Post-Matric Scholarship Scheme',
                            description: 'Scholarship for students pursuing post-secondary education (Class 11th, 12th, Diploma, Degree, etc.). Family income below Rs. 2.5 lakh. Provides maintenance allowance, tuition fees, and book allowance.',
                            link: 'https://scholarships.gov.in/',
                            amount: 35000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                minMarks10: 50,
                                minAge: 16,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Apply Online',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register with Aadhaar',
                                        'Select Post-Matric Scholarship',
                                        'Upload income certificate, 10th and 12th mark sheets',
                                        'Upload admission proof',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet_10th', 'marksheet_12th', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Top Class Education Scheme',
                            description: 'Scholarship for meritorious students from low-income families to pursue quality education. Family income below Rs. 4.5 lakh. Minimum 80% marks in qualifying exam.',
                            link: 'https://scholarships.gov.in/',
                            amount: 300000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 450000,
                                minMarks12: 80,
                                minAge: 17,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Application Process',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register and apply for Top Class Education Scheme',
                                        'Upload income certificate, mark sheets (80%+), and admission proof',
                                        'Submit application before deadline',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet_12th_80percent', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Dr. Ambedkar Post-Matric Scholarship',
                            description: 'Merit scholarship for economically weaker students. Family income below Rs. 2.5 lakh. Minimum 50% marks in qualifying exam. Provides full financial support for education.',
                            link: 'https://scholarships.gov.in/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                minMarks12: 50,
                                minAge: 16,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Apply',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register with Aadhaar',
                                        'Select Dr. Ambedkar Post-Matric Scholarship',
                                        'Upload income certificate, mark sheets, and admission proof',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'National Talent Search Scheme (NTSE)',
                            description: 'National level scholarship for meritorious students in Class 10th. Provides monthly stipend and one-time award. No income limit. Minimum 60% marks in Class 9th.',
                            link: 'https://www.ncert.nic.in/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                minMarks10: 60,
                                minAge: 14,
                                maxAge: 18,
                            },
                            steps: [
                                {
                                    title: 'Apply',
                                    items: [
                                        'Register through state education board',
                                        'Appear for NTSE exam',
                                        'Selected students receive scholarship',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'marksheet_9th', 'ntse_certificate', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Rashtriya Madhyamik Shiksha Abhiyan (RMSA) Merit Scholarship',
                            description: 'Merit scholarship for secondary education. Family income below Rs. 3 lakh. Minimum 75% marks in previous class. Provides financial assistance for books and fees.',
                            link: 'https://mhrd.gov.in/rmsa',
                            amount: 25000,
                            states: 'all',
                            applicableFor: 'merit',
                            categoryId: meritCategory === null || meritCategory === void 0 ? void 0 : meritCategory.id,
                            eligibilityRules: {
                                maxIncome: 300000,
                                minMarks10: 75,
                                minAge: 14,
                                maxAge: 20,
                            },
                            steps: [
                                {
                                    title: 'Apply',
                                    items: [
                                        'Contact school principal or education department',
                                        'Submit application with income certificate and mark sheets',
                                        'Scholarship awarded to eligible students',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet', 'school_admission', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Chief Minister Scholarship Scheme (CMSS) - Gujarat',
                            description: 'Gujarat Chief Minister Scholarship Scheme (CMSS) provides financial assistance to students from economically weaker sections and special categories pursuing higher education. Covers diploma, undergraduate, and postgraduate courses in government, private, and self-financed institutions in Gujarat. The scheme has 7 special categories: 1) Students from Taluka with below 50% literacy rate, 2) Children of Martyrs (Shaheed Jawan), 3) Students with Shramik Card (Workers), 4) Students with Disability Certificate, 5) Children of Widows, 6) Orphan Students, 7) Children with Tyakta Certificate (abandoned/renounced). Minimum 60% marks in 10th and 12th required. Family income should not exceed Rs. 4.5-6 lakh depending on category. Provides 50% tuition fee assistance up to Rs. 25,000-50,000 per year, plus hostel/food allowance (Rs. 1,200/month) and book assistance. Available for all eligible students regardless of caste/gender if they belong to any of the 7 special categories.',
                            link: 'https://scholarships.gujarat.gov.in/',
                            amount: 50000, // Up to Rs. 50,000 per year (50% of tuition fee)
                            states: 'Gujarat',
                            applicableFor: 'ews', // Primary category - EWS since it's need-based, but covers multiple special categories
                            categoryId: ewsCategory === null || ewsCategory === void 0 ? void 0 : ewsCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000, // Rs. 6 lakh per annum (varies by category, some categories have Rs. 4.5 lakh)
                                minMarks10: 60, // Minimum 60% in 10th standard
                                minMarks12: 60, // Minimum 60% in 12th standard
                                minAge: 17,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Eligibility Check - 7 CMSS Special Categories',
                                    items: [
                                        '1. Low Literacy Taluka: Students from Taluka with below 50% literacy rate (check official list on scholarships.gujarat.gov.in)',
                                        '2. Children of Martyrs: Children of Shaheed Jawan (martyrs) - need Shaheed Jawan certificate',
                                        '3. Shramik Card Holders: Students with valid Shramik Card (worker/laborer certificate)',
                                        '4. Disability: Students with disability certificate (minimum 40% disability)',
                                        '5. Widow\'s Children: Children of widows - need widow certificate',
                                        '6. Orphan Students: Orphan children - need orphan certificate',
                                        '7. Tyakta Certificate: Children whose parents have abandoned/renounced them - need Tyakta certificate',
                                        'Additional Requirements: Must be domicile of Gujarat, minimum 60% marks in 10th and 12th, enrolled in recognized institution in Gujarat, family income ≤ Rs. 4.5-6 lakh',
                                    ],
                                },
                                {
                                    title: 'Obtain Required Certificate (Based on Your Category)',
                                    items: [
                                        'For Low Literacy Taluka: Verify your Taluka from official list on scholarships.gujarat.gov.in (Taluka with <50% literacy rate)',
                                        'For Martyrs\' Children: Obtain Shaheed Jawan certificate from district administration',
                                        'For Workers: Obtain Shramik Card from labor department (check format on scholarships.gujarat.gov.in)',
                                        'For Disability: Obtain disability certificate (minimum 40% disability) from designated medical authority',
                                        'For Widow\'s Children: Obtain widow certificate from Tehsildar/BDO office',
                                        'For Orphan: Obtain orphan certificate from Child Welfare Committee/District Magistrate',
                                        'For Tyakta: Obtain Tyakta certificate (abandoned/renounced children) from district administration',
                                    ],
                                },
                                {
                                    title: 'Registration on Gujarat Scholarships Portal',
                                    items: [
                                        'Visit official Gujarat Scholarships portal: https://scholarships.gujarat.gov.in/',
                                        'Click on "Chief Minister Scholarship Scheme (CMSS)"',
                                        'Select your special category from the 7 categories',
                                        'Click on "New Registration" or "Login" if already registered',
                                        'Register with Aadhaar number and verify via OTP',
                                        'Fill personal details, select category, and family income information',
                                    ],
                                },
                                {
                                    title: 'Document Upload',
                                    items: [
                                        'Upload category-specific certificate (as per your chosen category: Low Literacy Taluka proof/Shaheed Jawan certificate/Shramik Card/Disability certificate/Widow certificate/Orphan certificate/Tyakta certificate)',
                                        'Upload income certificate (family income ≤ Rs. 4.5 lakh or Rs. 6 lakh as applicable)',
                                        'Upload 10th standard mark sheet (showing minimum 60% marks)',
                                        'Upload 12th standard mark sheet (showing minimum 60% marks)',
                                        'Upload current admission proof from recognized institution in Gujarat',
                                        'Upload domicile certificate of Gujarat',
                                        'Upload Aadhaar card',
                                        'Upload bank account details (passbook/cancelled cheque)',
                                        'Upload passport size photograph',
                                        'Upload fee receipt from institution (if applicable)',
                                        'Upload caste certificate (if applicable for SC/ST/OBC/EBC/SEBC)',
                                    ],
                                },
                                {
                                    title: 'Application Submission',
                                    items: [
                                        'Fill all educational details (diploma/UG/PG course information)',
                                        'Enter institution details (government/private/self-financed)',
                                        'Enter course fee details',
                                        'Verify Taluka name if applying under Low Literacy Taluka category (check official list)',
                                        'Review all information and uploaded documents',
                                        'Submit application online',
                                        'Save Application ID/Reference Number for tracking',
                                        'Take printout of submitted application for future reference',
                                    ],
                                },
                                {
                                    title: 'Verification & Disbursement',
                                    items: [
                                        'District Education Officer verifies category-specific certificate (martyrs/widow/orphan/disability/etc.)',
                                        'District verifies income certificate and domicile status',
                                        'Institution verifies admission and academic marks (minimum 60%)',
                                        'State Education Department cross-checks all documents',
                                        'For Low Literacy Taluka: Verify Taluka is in official list of Talukas with <50% literacy',
                                        'Eligible applications are approved',
                                        'Scholarship amount (50% tuition fee up to Rs. 25,000-50,000) credited to bank account',
                                        'Hostel and food allowance (Rs. 1,200/month) credited for students outside native taluka',
                                        'Book and instrument assistance provided in first year',
                                        'Track application status using Application ID at scholarships.gujarat.gov.in',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'category_certificate', 'income_certificate', 'gujarat_domicile', 'marksheet_10th_60percent', 'marksheet_12th_60percent', 'admission_proof', 'institution_fee_receipt', 'bank_account', 'passport_photo'],
                            isActive: true,
                        },
                        // ========== WOMEN SCHOLARSHIPS ==========
                        {
                            title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
                            description: 'Cash benefit of Rs. 5,000 in three installments for pregnant and lactating women for the first living child. Provides financial support during pregnancy and lactation.',
                            link: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana',
                            amount: 5000,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                maxIncome: null,
                                minAge: 19,
                                maxAge: 45,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit PMMVY portal or register at Anganwadi Centre',
                                        'Register with Aadhaar number',
                                        'Provide pregnancy details and expected delivery date',
                                        'Link bank account for direct benefit transfer',
                                    ],
                                },
                                {
                                    title: 'Document Submission',
                                    items: [
                                        'Submit Aadhaar card',
                                        'Submit bank account details',
                                        'Submit pregnancy certificate from doctor',
                                        'Submit MCP (Mother and Child Protection) card',
                                    ],
                                },
                                {
                                    title: 'Installment Payment',
                                    items: [
                                        'First installment: Rs. 1,000 after early registration of pregnancy',
                                        'Second installment: Rs. 2,000 after at least one antenatal check-up',
                                        'Third installment: Rs. 2,000 after child birth is registered and child has received first cycle of vaccination',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'bank_account', 'pregnancy_certificate', 'mcp_card'],
                            isActive: true,
                        },
                        {
                            title: 'Widow Pension Scheme (Indira Gandhi National Widow Pension Scheme)',
                            description: 'Monthly pension of Rs. 300-500 for widows below poverty line. Age between 18-79 years. Family income should be below poverty line.',
                            link: 'https://nsap.nic.in/',
                            amount: 6000,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                maxIncome: 120000,
                                minAge: 18,
                                maxAge: 79,
                            },
                            steps: [
                                {
                                    title: 'Application Process',
                                    items: [
                                        'Visit nearest Block Development Officer (BDO) or Tehsildar office',
                                        'Fill application form for widow pension',
                                        'Submit death certificate of husband',
                                        'Submit income certificate',
                                        'Submit Aadhaar card and bank account details',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'husband_death_certificate', 'income_certificate', 'bank_account', 'widow_certificate'],
                            isActive: true,
                        },
                        {
                            title: 'Beti Bachao Beti Padhao Scholarship',
                            description: 'Scholarship for girl children to promote education. Available for school and college students. Family income below Rs. 2.5 lakh for various schemes.',
                            link: 'https://wcd.nic.in/bbbp-schemes',
                            amount: 25000,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                maxIncome: 250000,
                                maxAge: 18,
                            },
                            steps: [
                                {
                                    title: 'Apply',
                                    items: [
                                        'Visit state women and child development department website',
                                        'Register and apply for scholarship',
                                        'Upload birth certificate, income certificate, and school admission proof',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'birth_certificate', 'income_certificate', 'school_admission', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Stand-Up India Scheme',
                            description: 'Loan scheme for women entrepreneurs. Provides loans between Rs. 10 lakh to Rs. 1 crore for setting up greenfield enterprises. Must have savings bank account.',
                            link: 'https://www.standupmitra.in/',
                            amount: 10000000,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                minAge: 18,
                                maxAge: 65,
                            },
                            steps: [
                                {
                                    title: 'Loan Application',
                                    items: [
                                        'Visit Stand-Up India portal or bank branch',
                                        'Submit business plan and project report',
                                        'Provide bank account details',
                                        'Submit identity proof and address proof',
                                        'Bank evaluates proposal and sanctions loan',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'bank_account', 'business_plan', 'project_report', 'identity_proof'],
                            isActive: true,
                        },
                        {
                            title: 'Janani Suraksha Yojana (JSY)',
                            description: 'Cash incentive of Rs. 700-1400 to promote institutional deliveries. Available for pregnant women in rural and urban areas. Helps reduce maternal and infant mortality.',
                            link: 'https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309',
                            amount: 1400,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                minAge: 19,
                                maxAge: 45,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Register at government hospital or health centre',
                                        'Provide Aadhaar and bank account details',
                                        'Receive cash incentive after institutional delivery',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'bank_account', 'pregnancy_certificate', 'delivery_certificate'],
                            isActive: true,
                        },
                        {
                            title: 'AICTE Pragati Scholarship for Girls',
                            description: 'Scholarship for girl students pursuing technical education (Engineering, Pharmacy, etc.). Family income below Rs. 8 lakh. Provides Rs. 50,000 per year. Minimum 50% marks required.',
                            link: 'https://www.aicte-india.org/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                maxIncome: 800000,
                                minMarks12: 50,
                                minAge: 17,
                                maxAge: 30,
                            },
                            steps: [
                                {
                                    title: 'Application',
                                    items: [
                                        'Visit AICTE portal',
                                        'Register and apply for Pragati scholarship',
                                        'Upload income certificate, mark sheets, and admission proof',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'marksheet', 'admission_proof', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Mahila Samman Savings Certificate',
                            description: 'Special savings scheme for women with interest rate of 7.5% per annum. Maximum deposit of Rs. 2 lakh. Maturity period of 2 years.',
                            link: 'https://www.indiapost.gov.in/',
                            amount: 200000,
                            states: 'all',
                            applicableFor: 'woman',
                            categoryId: womanCategory === null || womanCategory === void 0 ? void 0 : womanCategory.id,
                            eligibilityRules: {
                                gender: 'female',
                                minAge: 18,
                            },
                            steps: [
                                {
                                    title: 'Open Account',
                                    items: [
                                        'Visit nearest Post Office',
                                        'Fill application form',
                                        'Submit Aadhaar card and deposit amount',
                                        'Account opened and certificate issued',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'identity_proof', 'address_proof'],
                            isActive: true,
                        },
                        // ========== EWS SCHOLARSHIPS ==========
                        {
                            title: '10% Reservation in Education & Jobs (EWS Quota)',
                            description: '10% reservation in higher education institutions and government jobs for Economically Weaker Section (EWS) candidates. Family income should not exceed Rs. 8 lakh per annum. Must not belong to SC/ST/OBC category.',
                            link: 'https://www.indiatoday.in/education-today/news/story/ews-quota-reservation-application-eligibility-documents-1429567-2019-01-11',
                            amount: null,
                            states: 'all',
                            applicableFor: 'ews',
                            categoryId: ewsCategory === null || ewsCategory === void 0 ? void 0 : ewsCategory.id,
                            eligibilityRules: {
                                maxIncome: 800000,
                                caste: ['general'],
                            },
                            steps: [
                                {
                                    title: 'Obtain EWS Certificate',
                                    items: [
                                        'Visit Tehsildar/Sub-Divisional Magistrate (SDM) office',
                                        'Submit income certificate and family income proof',
                                        'Submit affidavit stating not belonging to SC/ST/OBC',
                                        'Submit residence certificate',
                                        'Collect EWS certificate after verification',
                                    ],
                                },
                                {
                                    title: 'Use EWS Certificate',
                                    items: [
                                        'Use certificate for admission in educational institutions',
                                        'Use certificate for applying government jobs',
                                        'Certificate valid for one year',
                                        'Renew certificate annually',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'ews_certificate', 'income_certificate', 'affidavit_not_sc_st_obc', 'residence_certificate'],
                            isActive: true,
                        },
                        {
                            title: 'EWS Scholarship for Students',
                            description: 'Scholarship for EWS students from school to college levels. Family income below Rs. 2.5 lakh. Age below 25 years. Covers tuition fees and maintenance allowance.',
                            link: 'https://scholarships.gov.in/',
                            amount: 50000,
                            states: 'all',
                            applicableFor: 'ews',
                            categoryId: ewsCategory === null || ewsCategory === void 0 ? void 0 : ewsCategory.id,
                            eligibilityRules: {
                                maxIncome: 250000,
                                maxAge: 25,
                                caste: ['general'],
                            },
                            steps: [
                                {
                                    title: 'Application',
                                    items: [
                                        'Visit National Scholarship Portal',
                                        'Register with Aadhaar',
                                        'Select EWS scholarship scheme',
                                        'Upload EWS certificate, income certificate, and mark sheets',
                                        'Submit application',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'ews_certificate', 'income_certificate', 'marksheet', 'bank_account'],
                            isActive: true,
                        },
                        {
                            title: 'Education Loan Subsidy Scheme for EWS',
                            description: 'Interest subsidy on education loans for EWS students pursuing professional and technical courses. Family income below Rs. 6 lakh. Central Government provides interest subsidy during moratorium period.',
                            link: 'https://www.canarabank.com/user_page.aspx?othlink=391',
                            amount: null,
                            states: 'all',
                            applicableFor: 'ews',
                            categoryId: ewsCategory === null || ewsCategory === void 0 ? void 0 : ewsCategory.id,
                            eligibilityRules: {
                                maxIncome: 600000,
                                caste: ['general'],
                            },
                            steps: [
                                {
                                    title: 'Apply for Education Loan',
                                    items: [
                                        'Apply for education loan from bank',
                                        'Provide EWS certificate and income certificate',
                                        'Bank sanctions loan',
                                        'Apply for interest subsidy through bank',
                                        'Government provides interest subsidy',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'ews_certificate', 'income_certificate', 'admission_proof', 'loan_documents'],
                            isActive: true,
                        },
                        {
                            title: 'Ayushman Bharat - PMJAY (Health Insurance for EWS)',
                            description: 'Health insurance of Rs. 5 lakh per family per year for EWS households. Covers hospitalization and major treatments. Family income below Rs. 5 lakh or families included in SECC database.',
                            link: 'https://pmjay.gov.in/',
                            amount: 500000,
                            states: 'all',
                            applicableFor: 'ews',
                            categoryId: ewsCategory === null || ewsCategory === void 0 ? void 0 : ewsCategory.id,
                            eligibilityRules: {
                                maxIncome: 500000,
                            },
                            steps: [
                                {
                                    title: 'Registration',
                                    items: [
                                        'Visit Ayushman Bharat portal or Common Service Centre',
                                        'Check eligibility using mobile number/Aadhaar',
                                        'If eligible, card generated automatically',
                                        'Use card for treatment at empaneled hospitals',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'family_ration_card', 'income_certificate'],
                            isActive: true,
                        },
                        {
                            title: 'Pradhan Mantri Awas Yojana (PMAY) - EWS Category',
                            description: 'Housing scheme for EWS families. Provides financial assistance of Rs. 1.5-2.5 lakh for construction of house. Family income below Rs. 3 lakh.',
                            link: 'https://pmaymis.gov.in/',
                            amount: 250000,
                            states: 'all',
                            applicableFor: 'ews',
                            categoryId: ewsCategory === null || ewsCategory === void 0 ? void 0 : ewsCategory.id,
                            eligibilityRules: {
                                maxIncome: 300000,
                            },
                            steps: [
                                {
                                    title: 'Application',
                                    items: [
                                        'Visit PMAY portal',
                                        'Check eligibility',
                                        'Apply for housing assistance',
                                        'Upload income certificate and land documents',
                                    ],
                                },
                            ],
                            requiredDocuments: ['aadhaar', 'income_certificate', 'land_document', 'house_construction_plan'],
                            isActive: true,
                        },
                    ];
                    // Clear existing scholarships and seed new ones
                    console.log('Clearing existing scholarships...');
                    return [4 /*yield*/, scholarshipRepo.clear()];
                case 3:
                    _b.sent();
                    _i = 0, scholarships_1 = scholarships;
                    _b.label = 4;
                case 4:
                    if (!(_i < scholarships_1.length)) return [3 /*break*/, 7];
                    sch = scholarships_1[_i];
                    return [4 /*yield*/, scholarshipRepo.save(scholarshipRepo.create(sch))];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 4];
                case 7:
                    // Seed Cyber Cafes (sample data)
                    console.log('Seeding cyber cafes...');
                    cafes = [
                        {
                            name: 'Cyber Cafe Central',
                            address: 'Main Street, Ahmedabad',
                            city: 'Ahmedabad',
                            district: 'Ahmedabad',
                            state: 'Gujarat',
                            pincode: '380001',
                            latitude: 23.0225,
                            longitude: 72.5714,
                            phone: '+91-9876543210',
                            isActive: true,
                            rating: 4.5,
                        },
                        {
                            name: 'Internet Point',
                            address: 'Gandhi Road, Vadodara',
                            city: 'Vadodara',
                            district: 'Vadodara',
                            state: 'Gujarat',
                            pincode: '390001',
                            latitude: 22.3072,
                            longitude: 73.1812,
                            phone: '+91-9876543211',
                            isActive: true,
                            rating: 4.2,
                        },
                    ];
                    _a = 0, cafes_1 = cafes;
                    _b.label = 8;
                case 8:
                    if (!(_a < cafes_1.length)) return [3 /*break*/, 12];
                    cafe = cafes_1[_a];
                    return [4 /*yield*/, cyberCafeRepo.findOne({ where: { name: cafe.name } })];
                case 9:
                    existing = _b.sent();
                    if (!!existing) return [3 /*break*/, 11];
                    return [4 /*yield*/, cyberCafeRepo.save(cyberCafeRepo.create(cafe))];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11:
                    _a++;
                    return [3 /*break*/, 8];
                case 12:
                    // Seed Admin User
                    console.log('Seeding admin user...');
                    return [4 /*yield*/, userRepo.findOne({ where: { email: 'admin@scholarpath.com' } })];
                case 13:
                    adminUser = _b.sent();
                    if (!!adminUser) return [3 /*break*/, 16];
                    return [4 /*yield*/, bcrypt.hash('admin123', 10)];
                case 14:
                    hashedPassword = _b.sent();
                    return [4 /*yield*/, userRepo.save(userRepo.create({
                            email: 'admin@scholarpath.com',
                            name: 'Admin User',
                            password: hashedPassword,
                            isAdmin: true,
                        }))];
                case 15:
                    _b.sent();
                    console.log('Admin user created: admin@scholarpath.com / admin123');
                    _b.label = 16;
                case 16:
                    console.log('Seeding completed!');
                    return [4 /*yield*/, data_source_1.AppDataSource.destroy()];
                case 17:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
seed().catch(function (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
});
