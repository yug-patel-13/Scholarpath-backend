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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFillRequest = exports.RequestStatus = exports.RequestType = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../users/entities/user.entity");
var RequestType;
(function (RequestType) {
    RequestType["ONLINE"] = "online";
    RequestType["OFFLINE"] = "offline";
})(RequestType || (exports.RequestType = RequestType = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["PENDING"] = "pending";
    RequestStatus["IN_PROGRESS"] = "in_progress";
    RequestStatus["COMPLETED"] = "completed";
    RequestStatus["CANCELLED"] = "cancelled";
})(RequestStatus || (exports.RequestStatus = RequestStatus = {}));
var FormFillRequest = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('form_fill_requests')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var _requestType_decorators;
    var _requestType_initializers = [];
    var _requestType_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
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
    var _adminNotes_decorators;
    var _adminNotes_initializers = [];
    var _adminNotes_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var FormFillRequest = _classThis = /** @class */ (function () {
        function FormFillRequest_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.userId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
            this.user = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.requestType = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _requestType_initializers, void 0));
            this.status = (__runInitializers(this, _requestType_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.scholarshipId = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _scholarshipId_initializers, void 0));
            this.description = (__runInitializers(this, _scholarshipId_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.contactPhone = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _contactPhone_initializers, void 0));
            this.contactEmail = (__runInitializers(this, _contactPhone_extraInitializers), __runInitializers(this, _contactEmail_initializers, void 0));
            this.address = (__runInitializers(this, _contactEmail_extraInitializers), __runInitializers(this, _address_initializers, void 0));
            this.pincode = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _pincode_initializers, void 0));
            this.preferredDate = (__runInitializers(this, _pincode_extraInitializers), __runInitializers(this, _preferredDate_initializers, void 0));
            this.preferredTime = (__runInitializers(this, _preferredDate_extraInitializers), __runInitializers(this, _preferredTime_initializers, void 0));
            this.additionalInfo = (__runInitializers(this, _preferredTime_extraInitializers), __runInitializers(this, _additionalInfo_initializers, void 0));
            this.adminNotes = (__runInitializers(this, _additionalInfo_extraInitializers), __runInitializers(this, _adminNotes_initializers, void 0));
            this.createdAt = (__runInitializers(this, _adminNotes_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            __runInitializers(this, _updatedAt_extraInitializers);
        }
        return FormFillRequest_1;
    }());
    __setFunctionName(_classThis, "FormFillRequest");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _userId_decorators = [(0, typeorm_1.Column)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.formFillRequests; }), (0, typeorm_1.JoinColumn)({ name: 'userId' })];
        _requestType_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: RequestType,
            })];
        _status_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: RequestStatus,
                default: RequestStatus.PENDING,
            })];
        _scholarshipId_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _description_decorators = [(0, typeorm_1.Column)('text', { nullable: true })];
        _contactPhone_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _contactEmail_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _address_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _pincode_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _preferredDate_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _preferredTime_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _additionalInfo_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _adminNotes_decorators = [(0, typeorm_1.Column)('text', { nullable: true })];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updatedAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _requestType_decorators, { kind: "field", name: "requestType", static: false, private: false, access: { has: function (obj) { return "requestType" in obj; }, get: function (obj) { return obj.requestType; }, set: function (obj, value) { obj.requestType = value; } }, metadata: _metadata }, _requestType_initializers, _requestType_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _scholarshipId_decorators, { kind: "field", name: "scholarshipId", static: false, private: false, access: { has: function (obj) { return "scholarshipId" in obj; }, get: function (obj) { return obj.scholarshipId; }, set: function (obj, value) { obj.scholarshipId = value; } }, metadata: _metadata }, _scholarshipId_initializers, _scholarshipId_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _contactPhone_decorators, { kind: "field", name: "contactPhone", static: false, private: false, access: { has: function (obj) { return "contactPhone" in obj; }, get: function (obj) { return obj.contactPhone; }, set: function (obj, value) { obj.contactPhone = value; } }, metadata: _metadata }, _contactPhone_initializers, _contactPhone_extraInitializers);
        __esDecorate(null, null, _contactEmail_decorators, { kind: "field", name: "contactEmail", static: false, private: false, access: { has: function (obj) { return "contactEmail" in obj; }, get: function (obj) { return obj.contactEmail; }, set: function (obj, value) { obj.contactEmail = value; } }, metadata: _metadata }, _contactEmail_initializers, _contactEmail_extraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _pincode_decorators, { kind: "field", name: "pincode", static: false, private: false, access: { has: function (obj) { return "pincode" in obj; }, get: function (obj) { return obj.pincode; }, set: function (obj, value) { obj.pincode = value; } }, metadata: _metadata }, _pincode_initializers, _pincode_extraInitializers);
        __esDecorate(null, null, _preferredDate_decorators, { kind: "field", name: "preferredDate", static: false, private: false, access: { has: function (obj) { return "preferredDate" in obj; }, get: function (obj) { return obj.preferredDate; }, set: function (obj, value) { obj.preferredDate = value; } }, metadata: _metadata }, _preferredDate_initializers, _preferredDate_extraInitializers);
        __esDecorate(null, null, _preferredTime_decorators, { kind: "field", name: "preferredTime", static: false, private: false, access: { has: function (obj) { return "preferredTime" in obj; }, get: function (obj) { return obj.preferredTime; }, set: function (obj, value) { obj.preferredTime = value; } }, metadata: _metadata }, _preferredTime_initializers, _preferredTime_extraInitializers);
        __esDecorate(null, null, _additionalInfo_decorators, { kind: "field", name: "additionalInfo", static: false, private: false, access: { has: function (obj) { return "additionalInfo" in obj; }, get: function (obj) { return obj.additionalInfo; }, set: function (obj, value) { obj.additionalInfo = value; } }, metadata: _metadata }, _additionalInfo_initializers, _additionalInfo_extraInitializers);
        __esDecorate(null, null, _adminNotes_decorators, { kind: "field", name: "adminNotes", static: false, private: false, access: { has: function (obj) { return "adminNotes" in obj; }, get: function (obj) { return obj.adminNotes; }, set: function (obj, value) { obj.adminNotes = value; } }, metadata: _metadata }, _adminNotes_initializers, _adminNotes_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FormFillRequest = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FormFillRequest = _classThis;
}();
exports.FormFillRequest = FormFillRequest;
