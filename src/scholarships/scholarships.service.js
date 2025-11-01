"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScholarshipsService = void 0;
var common_1 = require("@nestjs/common");
var ScholarshipsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ScholarshipsService = _classThis = /** @class */ (function () {
        function ScholarshipsService_1(scholarshipRepository) {
            this.scholarshipRepository = scholarshipRepository;
        }
        ScholarshipsService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.scholarshipRepository.find({
                            where: { isActive: true },
                            relations: ['category'],
                        })];
                });
            });
        };
        ScholarshipsService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.scholarshipRepository.findOne({
                            where: { id: id },
                            relations: ['category'],
                        })];
                });
            });
        };
        ScholarshipsService_1.prototype.findByCategory = function (categoryId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.scholarshipRepository.find({
                            where: { categoryId: categoryId, isActive: true },
                            relations: ['category'],
                        })];
                });
            });
        };
        ScholarshipsService_1.prototype.findEligible = function (profile) {
            return __awaiter(this, void 0, void 0, function () {
                var allScholarships, eligible, _i, allScholarships_1, scholarship;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findAll()];
                        case 1:
                            allScholarships = _a.sent();
                            eligible = [];
                            for (_i = 0, allScholarships_1 = allScholarships; _i < allScholarships_1.length; _i++) {
                                scholarship = allScholarships_1[_i];
                                try {
                                    if (this.checkEligibility(scholarship, profile)) {
                                        eligible.push(scholarship);
                                    }
                                }
                                catch (error) {
                                    // Log error but continue checking other scholarships
                                    console.error("Error checking eligibility for scholarship ".concat(scholarship.id, " (").concat(scholarship.title, "):"), error);
                                }
                            }
                            return [2 /*return*/, eligible];
                    }
                });
            });
        };
        ScholarshipsService_1.prototype.checkEligibility = function (scholarship, profile) {
            var _a, _b, _c;
            var rules = scholarship.eligibilityRules;
            if (!rules) {
                // If no rules, check only category match
                if (scholarship.applicableFor !== 'all' && scholarship.applicableFor !== profile.category) {
                    return false;
                }
                return true;
            }
            // Check applicable category - MUST match
            if (scholarship.applicableFor !== 'all' && scholarship.applicableFor !== profile.category) {
                return false;
            }
            // Check state - strict matching (case-insensitive, handle common variations)
            if (scholarship.states !== 'all') {
                var allowedStates = scholarship.states.split(',').map(function (s) { return s.trim().toLowerCase(); });
                var profileState = (_a = profile.state) === null || _a === void 0 ? void 0 : _a.toLowerCase().trim();
                if (!profileState) {
                    return false; // State is required but not provided
                }
                // Normalize state names for better matching (handle common abbreviations/variations)
                var stateNormalizations = {
                    'gujarat': ['gujarat', 'guj', 'gj'],
                    'maharashtra': ['maharashtra', 'maha', 'mh'],
                    'rajasthan': ['rajasthan', 'raj', 'rj'],
                    'karnataka': ['karnataka', 'kar', 'ka'],
                    'tamil nadu': ['tamil nadu', 'tamilnadu', 'tn'],
                    'west bengal': ['west bengal', 'westbengal', 'wb'],
                    'andhra pradesh': ['andhra pradesh', 'andhrapradesh', 'ap'],
                    'uttar pradesh': ['uttar pradesh', 'uttarpradesh', 'up'],
                };
                // Check if profile state matches any allowed state (with normalization)
                var stateMatched = allowedStates.includes(profileState);
                if (!stateMatched) {
                    // Try normalization
                    for (var _i = 0, _d = Object.entries(stateNormalizations); _i < _d.length; _i++) {
                        var _e = _d[_i], normalized = _e[0], variations = _e[1];
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
            // Check income - strict validation (use Number() for proper comparison)
            if (rules.maxIncome !== null && rules.maxIncome !== undefined) {
                var profileIncome = Number(profile.annualIncome);
                var maxIncome = Number(rules.maxIncome);
                if (!profileIncome || isNaN(profileIncome) || profileIncome > maxIncome) {
                    return false;
                }
            }
            if (rules.minIncome !== null && rules.minIncome !== undefined) {
                var profileIncome = Number(profile.annualIncome);
                var minIncome = Number(rules.minIncome);
                if (!profileIncome || isNaN(profileIncome) || profileIncome < minIncome) {
                    return false;
                }
            }
            // Check age - strict validation (use Number() for proper comparison)
            if (rules.maxAge !== null && rules.maxAge !== undefined) {
                var profileAge = profile.age !== null && profile.age !== undefined ? Number(profile.age) : null;
                var maxAge = Number(rules.maxAge);
                if (!profileAge || isNaN(profileAge) || profileAge > maxAge) {
                    return false;
                }
            }
            if (rules.minAge !== null && rules.minAge !== undefined) {
                var profileAge = profile.age !== null && profile.age !== undefined ? Number(profile.age) : null;
                var minAge = Number(rules.minAge);
                if (!profileAge || isNaN(profileAge) || profileAge < minAge) {
                    return false;
                }
            }
            // Check marks - strict validation (marks must meet minimum, use Number() for proper comparison)
            // For 10th marks: must be >= minimum if rule exists
            if (rules.minMarks10 !== null && rules.minMarks10 !== undefined) {
                var profileMarks10 = profile.marks10 !== null && profile.marks10 !== undefined ? Number(profile.marks10) : null;
                var minMarks10 = Number(rules.minMarks10);
                if (profileMarks10 === null || isNaN(profileMarks10) || profileMarks10 < minMarks10) {
                    return false;
                }
            }
            // For 12th marks: must be >= minimum if rule exists
            if (rules.minMarks12 !== null && rules.minMarks12 !== undefined) {
                var profileMarks12 = profile.marks12 !== null && profile.marks12 !== undefined ? Number(profile.marks12) : null;
                var minMarks12 = Number(rules.minMarks12);
                if (profileMarks12 === null || isNaN(profileMarks12) || profileMarks12 < minMarks12) {
                    return false;
                }
            }
            // Check caste - must match one of the allowed castes
            if (rules.caste && Array.isArray(rules.caste) && rules.caste.length > 0) {
                var profileCaste = (_b = profile.caste) === null || _b === void 0 ? void 0 : _b.toLowerCase().trim();
                if (!profileCaste || !rules.caste.includes(profileCaste)) {
                    return false;
                }
            }
            // Check gender - must match exactly
            if (rules.gender && rules.gender !== 'all') {
                var profileGender = (_c = profile.gender) === null || _c === void 0 ? void 0 : _c.toLowerCase().trim();
                if (!profileGender || profileGender !== rules.gender.toLowerCase().trim()) {
                    return false;
                }
            }
            // Check land size (for farmers) - must not exceed maximum (use Number() for proper comparison)
            if (rules.landSize !== null && rules.landSize !== undefined) {
                var profileLandSize = profile.landSize !== null && profile.landSize !== undefined ? Number(profile.landSize) : null;
                var maxLandSize = Number(rules.landSize);
                if (profileLandSize === null || isNaN(profileLandSize) || profileLandSize > maxLandSize) {
                    return false;
                }
            }
            // Check farmer type - must match one of the allowed types
            if (rules.farmerType && Array.isArray(rules.farmerType) && rules.farmerType.length > 0) {
                if (!profile.farmerType) {
                    return false;
                }
                var profileFarmerType = profile.farmerType.toLowerCase().trim();
                if (!rules.farmerType.includes(profileFarmerType)) {
                    return false;
                }
            }
            // Check loan status - must match if specified
            if (rules.loanStatus && rules.loanStatus !== 'any') {
                if (!profile.loanStatus) {
                    return false;
                }
                var profileLoanStatus = profile.loanStatus.toLowerCase().trim();
                if (profileLoanStatus !== rules.loanStatus.toLowerCase().trim()) {
                    return false;
                }
            }
            // Check crop (if specified)
            if (rules.crop && Array.isArray(rules.crop) && rules.crop.length > 0) {
                if (!profile.crop) {
                    return false;
                }
                var profileCrop = profile.crop.toLowerCase().trim();
                if (!rules.crop.includes(profileCrop)) {
                    return false;
                }
            }
            return true;
        };
        return ScholarshipsService_1;
    }());
    __setFunctionName(_classThis, "ScholarshipsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScholarshipsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScholarshipsService = _classThis;
}();
exports.ScholarshipsService = ScholarshipsService;
