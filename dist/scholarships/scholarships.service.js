"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScholarshipsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const scholarship_entity_1 = require("./entities/scholarship.entity");
let ScholarshipsService = class ScholarshipsService {
    constructor(scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }
    async findAll() {
        return this.scholarshipRepository.find({
            where: { isActive: true },
            relations: ['category'],
        });
    }
    async findOne(id) {
        return this.scholarshipRepository.findOne({
            where: { id },
            relations: ['category'],
        });
    }
    async findByCategory(categoryId) {
        return this.scholarshipRepository.find({
            where: { categoryId, isActive: true },
            relations: ['category'],
        });
    }
    async findEligible(profile) {
        const allScholarships = await this.findAll();
        const eligible = [];
        for (const scholarship of allScholarships) {
            try {
                if (this.checkEligibility(scholarship, profile)) {
                    eligible.push(scholarship);
                }
            }
            catch (error) {
                console.error(`Error checking eligibility for scholarship ${scholarship.id} (${scholarship.title}):`, error);
            }
        }
        return eligible;
    }
    checkEligibility(scholarship, profile) {
        const rules = scholarship.eligibilityRules;
        if (!rules) {
            if (scholarship.applicableFor !== 'all' && scholarship.applicableFor !== profile.category) {
                return false;
            }
            return true;
        }
        if (scholarship.applicableFor !== 'all' && scholarship.applicableFor !== profile.category) {
            return false;
        }
        if (scholarship.states !== 'all') {
            const allowedStates = scholarship.states.split(',').map(s => s.trim().toLowerCase());
            const profileState = profile.state?.toLowerCase().trim();
            if (!profileState) {
                return false;
            }
            const stateNormalizations = {
                'gujarat': ['gujarat', 'guj', 'gj'],
                'maharashtra': ['maharashtra', 'maha', 'mh'],
                'rajasthan': ['rajasthan', 'raj', 'rj'],
                'karnataka': ['karnataka', 'kar', 'ka'],
                'tamil nadu': ['tamil nadu', 'tamilnadu', 'tn'],
                'west bengal': ['west bengal', 'westbengal', 'wb'],
                'andhra pradesh': ['andhra pradesh', 'andhrapradesh', 'ap'],
                'uttar pradesh': ['uttar pradesh', 'uttarpradesh', 'up'],
            };
            let stateMatched = allowedStates.includes(profileState);
            if (!stateMatched) {
                for (const [normalized, variations] of Object.entries(stateNormalizations)) {
                    if (allowedStates.includes(normalized) && variations.includes(profileState)) {
                        stateMatched = true;
                        break;
                    }
                }
            }
            if (!stateMatched) {
                return false;
            }
        }
        if (rules.maxIncome !== null && rules.maxIncome !== undefined) {
            const profileIncome = Number(profile.annualIncome);
            const maxIncome = Number(rules.maxIncome);
            if (!profileIncome || isNaN(profileIncome) || profileIncome > maxIncome) {
                return false;
            }
        }
        if (rules.minIncome !== null && rules.minIncome !== undefined) {
            const profileIncome = Number(profile.annualIncome);
            const minIncome = Number(rules.minIncome);
            if (!profileIncome || isNaN(profileIncome) || profileIncome < minIncome) {
                return false;
            }
        }
        if (rules.maxAge !== null && rules.maxAge !== undefined) {
            const profileAge = profile.age !== null && profile.age !== undefined ? Number(profile.age) : null;
            const maxAge = Number(rules.maxAge);
            if (!profileAge || isNaN(profileAge) || profileAge > maxAge) {
                return false;
            }
        }
        if (rules.minAge !== null && rules.minAge !== undefined) {
            const profileAge = profile.age !== null && profile.age !== undefined ? Number(profile.age) : null;
            const minAge = Number(rules.minAge);
            if (!profileAge || isNaN(profileAge) || profileAge < minAge) {
                return false;
            }
        }
        if (rules.minMarks10 !== null && rules.minMarks10 !== undefined) {
            const profileMarks10 = profile.marks10 !== null && profile.marks10 !== undefined ? Number(profile.marks10) : null;
            const minMarks10 = Number(rules.minMarks10);
            if (profileMarks10 === null || isNaN(profileMarks10) || profileMarks10 < minMarks10) {
                return false;
            }
        }
        if (rules.minMarks12 !== null && rules.minMarks12 !== undefined) {
            const profileMarks12 = profile.marks12 !== null && profile.marks12 !== undefined ? Number(profile.marks12) : null;
            const minMarks12 = Number(rules.minMarks12);
            if (profileMarks12 === null || isNaN(profileMarks12) || profileMarks12 < minMarks12) {
                return false;
            }
        }
        if (rules.caste && Array.isArray(rules.caste) && rules.caste.length > 0) {
            const profileCaste = profile.caste?.toLowerCase().trim();
            if (!profileCaste || !rules.caste.includes(profileCaste)) {
                return false;
            }
        }
        if (rules.gender && rules.gender !== 'all') {
            const profileGender = profile.gender?.toLowerCase().trim();
            if (!profileGender || profileGender !== rules.gender.toLowerCase().trim()) {
                return false;
            }
        }
        if (rules.landSize !== null && rules.landSize !== undefined) {
            const profileLandSize = profile.landSize !== null && profile.landSize !== undefined ? Number(profile.landSize) : null;
            const maxLandSize = Number(rules.landSize);
            if (profileLandSize === null || isNaN(profileLandSize) || profileLandSize > maxLandSize) {
                return false;
            }
        }
        if (rules.farmerType && Array.isArray(rules.farmerType) && rules.farmerType.length > 0) {
            if (!profile.farmerType) {
                return false;
            }
            const profileFarmerType = profile.farmerType.toLowerCase().trim();
            if (!rules.farmerType.includes(profileFarmerType)) {
                return false;
            }
        }
        if (rules.loanStatus && rules.loanStatus !== 'any') {
            if (!profile.loanStatus) {
                return false;
            }
            const profileLoanStatus = profile.loanStatus.toLowerCase().trim();
            if (profileLoanStatus !== rules.loanStatus.toLowerCase().trim()) {
                return false;
            }
        }
        if (rules.crop && Array.isArray(rules.crop) && rules.crop.length > 0) {
            if (!profile.crop) {
                return false;
            }
            const profileCrop = profile.crop.toLowerCase().trim();
            if (!rules.crop.includes(profileCrop)) {
                return false;
            }
        }
        if (rules.requiresCMSSCategory === true && rules.cmssCategories && Array.isArray(rules.cmssCategories) && rules.cmssCategories.length > 0) {
            const hasAnyCMSSCategory = profile.lowLiteracyTaluka === true ||
                profile.childrenOfMartyrs === true ||
                profile.shramikCard === true ||
                profile.disabilityCertificate === true ||
                profile.widowCertificate === true ||
                profile.orphanCertificate === true ||
                profile.tyaktaCertificate === true;
            const isSCSTOBC = profile.caste && ['sc', 'st', 'obc'].includes(profile.caste.toLowerCase());
            if (!isSCSTOBC && !hasAnyCMSSCategory) {
                return false;
            }
        }
        return true;
    }
};
exports.ScholarshipsService = ScholarshipsService;
exports.ScholarshipsService = ScholarshipsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scholarship_entity_1.Scholarship)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScholarshipsService);
//# sourceMappingURL=scholarships.service.js.map