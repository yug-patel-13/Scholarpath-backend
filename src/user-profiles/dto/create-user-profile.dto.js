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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserProfileDto = void 0;
var class_validator_1 = require("class-validator");
var CreateUserProfileDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _age_decorators;
    var _age_initializers = [];
    var _age_extraInitializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _gender_extraInitializers = [];
    var _caste_decorators;
    var _caste_initializers = [];
    var _caste_extraInitializers = [];
    var _aadhaar_decorators;
    var _aadhaar_initializers = [];
    var _aadhaar_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _annualIncome_decorators;
    var _annualIncome_initializers = [];
    var _annualIncome_extraInitializers = [];
    var _marks10_decorators;
    var _marks10_initializers = [];
    var _marks10_extraInitializers = [];
    var _marks12_decorators;
    var _marks12_initializers = [];
    var _marks12_extraInitializers = [];
    var _landSize_decorators;
    var _landSize_initializers = [];
    var _landSize_extraInitializers = [];
    var _crop_decorators;
    var _crop_initializers = [];
    var _crop_extraInitializers = [];
    var _farmerType_decorators;
    var _farmerType_initializers = [];
    var _farmerType_extraInitializers = [];
    var _loanStatus_decorators;
    var _loanStatus_initializers = [];
    var _loanStatus_extraInitializers = [];
    var _state_decorators;
    var _state_initializers = [];
    var _state_extraInitializers = [];
    var _district_decorators;
    var _district_initializers = [];
    var _district_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _pincode_decorators;
    var _pincode_initializers = [];
    var _pincode_extraInitializers = [];
    var _documents_decorators;
    var _documents_initializers = [];
    var _documents_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateUserProfileDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.category = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _category_initializers, void 0));
                this.name = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.age = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _age_initializers, void 0));
                this.gender = (__runInitializers(this, _age_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
                this.caste = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _caste_initializers, void 0));
                this.aadhaar = (__runInitializers(this, _caste_extraInitializers), __runInitializers(this, _aadhaar_initializers, void 0));
                this.phone = (__runInitializers(this, _aadhaar_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
                this.annualIncome = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _annualIncome_initializers, void 0));
                this.marks10 = (__runInitializers(this, _annualIncome_extraInitializers), __runInitializers(this, _marks10_initializers, void 0));
                this.marks12 = (__runInitializers(this, _marks10_extraInitializers), __runInitializers(this, _marks12_initializers, void 0));
                this.landSize = (__runInitializers(this, _marks12_extraInitializers), __runInitializers(this, _landSize_initializers, void 0));
                this.crop = (__runInitializers(this, _landSize_extraInitializers), __runInitializers(this, _crop_initializers, void 0));
                this.farmerType = (__runInitializers(this, _crop_extraInitializers), __runInitializers(this, _farmerType_initializers, void 0));
                this.loanStatus = (__runInitializers(this, _farmerType_extraInitializers), __runInitializers(this, _loanStatus_initializers, void 0));
                this.state = (__runInitializers(this, _loanStatus_extraInitializers), __runInitializers(this, _state_initializers, void 0));
                this.district = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _district_initializers, void 0));
                this.city = (__runInitializers(this, _district_extraInitializers), __runInitializers(this, _city_initializers, void 0));
                this.pincode = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _pincode_initializers, void 0));
                this.documents = (__runInitializers(this, _pincode_extraInitializers), __runInitializers(this, _documents_initializers, void 0));
                __runInitializers(this, _documents_extraInitializers);
            }
            return CreateUserProfileDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, class_validator_1.IsNumber)()];
            _category_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _name_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _age_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _gender_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _caste_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _aadhaar_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _phone_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _annualIncome_decorators = [(0, class_validator_1.IsOptional)()];
            _marks10_decorators = [(0, class_validator_1.IsOptional)()];
            _marks12_decorators = [(0, class_validator_1.IsOptional)()];
            _landSize_decorators = [(0, class_validator_1.IsOptional)()];
            _crop_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _farmerType_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _loanStatus_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _state_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _district_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _city_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _pincode_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _documents_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: function (obj) { return "age" in obj; }, get: function (obj) { return obj.age; }, set: function (obj, value) { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
            __esDecorate(null, null, _caste_decorators, { kind: "field", name: "caste", static: false, private: false, access: { has: function (obj) { return "caste" in obj; }, get: function (obj) { return obj.caste; }, set: function (obj, value) { obj.caste = value; } }, metadata: _metadata }, _caste_initializers, _caste_extraInitializers);
            __esDecorate(null, null, _aadhaar_decorators, { kind: "field", name: "aadhaar", static: false, private: false, access: { has: function (obj) { return "aadhaar" in obj; }, get: function (obj) { return obj.aadhaar; }, set: function (obj, value) { obj.aadhaar = value; } }, metadata: _metadata }, _aadhaar_initializers, _aadhaar_extraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _annualIncome_decorators, { kind: "field", name: "annualIncome", static: false, private: false, access: { has: function (obj) { return "annualIncome" in obj; }, get: function (obj) { return obj.annualIncome; }, set: function (obj, value) { obj.annualIncome = value; } }, metadata: _metadata }, _annualIncome_initializers, _annualIncome_extraInitializers);
            __esDecorate(null, null, _marks10_decorators, { kind: "field", name: "marks10", static: false, private: false, access: { has: function (obj) { return "marks10" in obj; }, get: function (obj) { return obj.marks10; }, set: function (obj, value) { obj.marks10 = value; } }, metadata: _metadata }, _marks10_initializers, _marks10_extraInitializers);
            __esDecorate(null, null, _marks12_decorators, { kind: "field", name: "marks12", static: false, private: false, access: { has: function (obj) { return "marks12" in obj; }, get: function (obj) { return obj.marks12; }, set: function (obj, value) { obj.marks12 = value; } }, metadata: _metadata }, _marks12_initializers, _marks12_extraInitializers);
            __esDecorate(null, null, _landSize_decorators, { kind: "field", name: "landSize", static: false, private: false, access: { has: function (obj) { return "landSize" in obj; }, get: function (obj) { return obj.landSize; }, set: function (obj, value) { obj.landSize = value; } }, metadata: _metadata }, _landSize_initializers, _landSize_extraInitializers);
            __esDecorate(null, null, _crop_decorators, { kind: "field", name: "crop", static: false, private: false, access: { has: function (obj) { return "crop" in obj; }, get: function (obj) { return obj.crop; }, set: function (obj, value) { obj.crop = value; } }, metadata: _metadata }, _crop_initializers, _crop_extraInitializers);
            __esDecorate(null, null, _farmerType_decorators, { kind: "field", name: "farmerType", static: false, private: false, access: { has: function (obj) { return "farmerType" in obj; }, get: function (obj) { return obj.farmerType; }, set: function (obj, value) { obj.farmerType = value; } }, metadata: _metadata }, _farmerType_initializers, _farmerType_extraInitializers);
            __esDecorate(null, null, _loanStatus_decorators, { kind: "field", name: "loanStatus", static: false, private: false, access: { has: function (obj) { return "loanStatus" in obj; }, get: function (obj) { return obj.loanStatus; }, set: function (obj, value) { obj.loanStatus = value; } }, metadata: _metadata }, _loanStatus_initializers, _loanStatus_extraInitializers);
            __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
            __esDecorate(null, null, _district_decorators, { kind: "field", name: "district", static: false, private: false, access: { has: function (obj) { return "district" in obj; }, get: function (obj) { return obj.district; }, set: function (obj, value) { obj.district = value; } }, metadata: _metadata }, _district_initializers, _district_extraInitializers);
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
            __esDecorate(null, null, _pincode_decorators, { kind: "field", name: "pincode", static: false, private: false, access: { has: function (obj) { return "pincode" in obj; }, get: function (obj) { return obj.pincode; }, set: function (obj, value) { obj.pincode = value; } }, metadata: _metadata }, _pincode_initializers, _pincode_extraInitializers);
            __esDecorate(null, null, _documents_decorators, { kind: "field", name: "documents", static: false, private: false, access: { has: function (obj) { return "documents" in obj; }, get: function (obj) { return obj.documents; }, set: function (obj, value) { obj.documents = value; } }, metadata: _metadata }, _documents_initializers, _documents_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateUserProfileDto = CreateUserProfileDto;
