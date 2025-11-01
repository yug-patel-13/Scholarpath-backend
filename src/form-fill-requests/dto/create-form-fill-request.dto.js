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
exports.CreateFormFillRequestDto = void 0;
var class_validator_1 = require("class-validator");
var form_fill_request_entity_1 = require("../entities/form-fill-request.entity");
var CreateFormFillRequestDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _requestType_decorators;
    var _requestType_initializers = [];
    var _requestType_extraInitializers = [];
    var _scholarshipId_decorators;
    var _scholarshipId_initializers = [];
    var _scholarshipId_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _contactPhone_decorators;
    var _contactPhone_initializers = [];
    var _contactPhone_extraInitializers = [];
    var _contactEmail_decorators;
    var _contactEmail_initializers = [];
    var _contactEmail_extraInitializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _pincode_decorators;
    var _pincode_initializers = [];
    var _pincode_extraInitializers = [];
    var _preferredDate_decorators;
    var _preferredDate_initializers = [];
    var _preferredDate_extraInitializers = [];
    var _preferredTime_decorators;
    var _preferredTime_initializers = [];
    var _preferredTime_extraInitializers = [];
    var _additionalInfo_decorators;
    var _additionalInfo_initializers = [];
    var _additionalInfo_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateFormFillRequestDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.requestType = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _requestType_initializers, void 0));
                this.scholarshipId = (__runInitializers(this, _requestType_extraInitializers), __runInitializers(this, _scholarshipId_initializers, void 0));
                this.description = (__runInitializers(this, _scholarshipId_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.contactPhone = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _contactPhone_initializers, void 0));
                this.contactEmail = (__runInitializers(this, _contactPhone_extraInitializers), __runInitializers(this, _contactEmail_initializers, void 0));
                this.address = (__runInitializers(this, _contactEmail_extraInitializers), __runInitializers(this, _address_initializers, void 0));
                this.pincode = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _pincode_initializers, void 0));
                this.preferredDate = (__runInitializers(this, _pincode_extraInitializers), __runInitializers(this, _preferredDate_initializers, void 0));
                this.preferredTime = (__runInitializers(this, _preferredDate_extraInitializers), __runInitializers(this, _preferredTime_initializers, void 0));
                this.additionalInfo = (__runInitializers(this, _preferredTime_extraInitializers), __runInitializers(this, _additionalInfo_initializers, void 0));
                __runInitializers(this, _additionalInfo_extraInitializers);
            }
            return CreateFormFillRequestDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, class_validator_1.IsNumber)()];
            _requestType_decorators = [(0, class_validator_1.IsEnum)(form_fill_request_entity_1.RequestType)];
            _scholarshipId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _description_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _contactPhone_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _contactEmail_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _address_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _pincode_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _preferredDate_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _preferredTime_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _additionalInfo_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _requestType_decorators, { kind: "field", name: "requestType", static: false, private: false, access: { has: function (obj) { return "requestType" in obj; }, get: function (obj) { return obj.requestType; }, set: function (obj, value) { obj.requestType = value; } }, metadata: _metadata }, _requestType_initializers, _requestType_extraInitializers);
            __esDecorate(null, null, _scholarshipId_decorators, { kind: "field", name: "scholarshipId", static: false, private: false, access: { has: function (obj) { return "scholarshipId" in obj; }, get: function (obj) { return obj.scholarshipId; }, set: function (obj, value) { obj.scholarshipId = value; } }, metadata: _metadata }, _scholarshipId_initializers, _scholarshipId_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _contactPhone_decorators, { kind: "field", name: "contactPhone", static: false, private: false, access: { has: function (obj) { return "contactPhone" in obj; }, get: function (obj) { return obj.contactPhone; }, set: function (obj, value) { obj.contactPhone = value; } }, metadata: _metadata }, _contactPhone_initializers, _contactPhone_extraInitializers);
            __esDecorate(null, null, _contactEmail_decorators, { kind: "field", name: "contactEmail", static: false, private: false, access: { has: function (obj) { return "contactEmail" in obj; }, get: function (obj) { return obj.contactEmail; }, set: function (obj, value) { obj.contactEmail = value; } }, metadata: _metadata }, _contactEmail_initializers, _contactEmail_extraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
            __esDecorate(null, null, _pincode_decorators, { kind: "field", name: "pincode", static: false, private: false, access: { has: function (obj) { return "pincode" in obj; }, get: function (obj) { return obj.pincode; }, set: function (obj, value) { obj.pincode = value; } }, metadata: _metadata }, _pincode_initializers, _pincode_extraInitializers);
            __esDecorate(null, null, _preferredDate_decorators, { kind: "field", name: "preferredDate", static: false, private: false, access: { has: function (obj) { return "preferredDate" in obj; }, get: function (obj) { return obj.preferredDate; }, set: function (obj, value) { obj.preferredDate = value; } }, metadata: _metadata }, _preferredDate_initializers, _preferredDate_extraInitializers);
            __esDecorate(null, null, _preferredTime_decorators, { kind: "field", name: "preferredTime", static: false, private: false, access: { has: function (obj) { return "preferredTime" in obj; }, get: function (obj) { return obj.preferredTime; }, set: function (obj, value) { obj.preferredTime = value; } }, metadata: _metadata }, _preferredTime_initializers, _preferredTime_extraInitializers);
            __esDecorate(null, null, _additionalInfo_decorators, { kind: "field", name: "additionalInfo", static: false, private: false, access: { has: function (obj) { return "additionalInfo" in obj; }, get: function (obj) { return obj.additionalInfo; }, set: function (obj, value) { obj.additionalInfo = value; } }, metadata: _metadata }, _additionalInfo_initializers, _additionalInfo_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateFormFillRequestDto = CreateFormFillRequestDto;
