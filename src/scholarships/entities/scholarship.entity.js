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
exports.Scholarship = void 0;
var typeorm_1 = require("typeorm");
var category_entity_1 = require("../../categories/entities/category.entity");
var Scholarship = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('scholarships')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _link_decorators;
    var _link_initializers = [];
    var _link_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _states_decorators;
    var _states_initializers = [];
    var _states_extraInitializers = [];
    var _applicableFor_decorators;
    var _applicableFor_initializers = [];
    var _applicableFor_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _categoryId_decorators;
    var _categoryId_initializers = [];
    var _categoryId_extraInitializers = [];
    var _eligibilityRules_decorators;
    var _eligibilityRules_initializers = [];
    var _eligibilityRules_extraInitializers = [];
    var _steps_decorators;
    var _steps_initializers = [];
    var _steps_extraInitializers = [];
    var _requiredDocuments_decorators;
    var _requiredDocuments_initializers = [];
    var _requiredDocuments_extraInitializers = [];
    var _pdfUrl_decorators;
    var _pdfUrl_initializers = [];
    var _pdfUrl_extraInitializers = [];
    var _videoUrl_decorators;
    var _videoUrl_initializers = [];
    var _videoUrl_extraInitializers = [];
    var _isActive_decorators;
    var _isActive_initializers = [];
    var _isActive_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var Scholarship = _classThis = /** @class */ (function () {
        function Scholarship_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.link = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _link_initializers, void 0));
            this.amount = (__runInitializers(this, _link_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.states = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _states_initializers, void 0)); // 'all' or comma-separated state names
            this.applicableFor = (__runInitializers(this, _states_extraInitializers), __runInitializers(this, _applicableFor_initializers, void 0)); // farmer, sc/st/obc, merit, woman, ews, etc.
            this.category = (__runInitializers(this, _applicableFor_extraInitializers), __runInitializers(this, _category_initializers, void 0));
            this.categoryId = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
            // Eligibility criteria stored as JSON
            this.eligibilityRules = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _eligibilityRules_initializers, void 0));
            // Steps to fill form
            this.steps = (__runInitializers(this, _eligibilityRules_extraInitializers), __runInitializers(this, _steps_initializers, void 0));
            this.requiredDocuments = (__runInitializers(this, _steps_extraInitializers), __runInitializers(this, _requiredDocuments_initializers, void 0));
            this.pdfUrl = (__runInitializers(this, _requiredDocuments_extraInitializers), __runInitializers(this, _pdfUrl_initializers, void 0));
            this.videoUrl = (__runInitializers(this, _pdfUrl_extraInitializers), __runInitializers(this, _videoUrl_initializers, void 0));
            this.isActive = (__runInitializers(this, _videoUrl_extraInitializers), __runInitializers(this, _isActive_initializers, void 0));
            this.createdAt = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
            this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
            __runInitializers(this, _updatedAt_extraInitializers);
        }
        return Scholarship_1;
    }());
    __setFunctionName(_classThis, "Scholarship");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)('text')];
        _link_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _amount_decorators = [(0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true })];
        _states_decorators = [(0, typeorm_1.Column)({ default: 'all' })];
        _applicableFor_decorators = [(0, typeorm_1.Column)({ default: 'all' })];
        _category_decorators = [(0, typeorm_1.ManyToOne)(function () { return category_entity_1.Category; }, function (category) { return category.scholarships; }), (0, typeorm_1.JoinColumn)({ name: 'categoryId' })];
        _categoryId_decorators = [(0, typeorm_1.Column)()];
        _eligibilityRules_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _steps_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _requiredDocuments_decorators = [(0, typeorm_1.Column)('jsonb', { nullable: true })];
        _pdfUrl_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _videoUrl_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _isActive_decorators = [(0, typeorm_1.Column)({ default: true })];
        _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updatedAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _link_decorators, { kind: "field", name: "link", static: false, private: false, access: { has: function (obj) { return "link" in obj; }, get: function (obj) { return obj.link; }, set: function (obj, value) { obj.link = value; } }, metadata: _metadata }, _link_initializers, _link_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _states_decorators, { kind: "field", name: "states", static: false, private: false, access: { has: function (obj) { return "states" in obj; }, get: function (obj) { return obj.states; }, set: function (obj, value) { obj.states = value; } }, metadata: _metadata }, _states_initializers, _states_extraInitializers);
        __esDecorate(null, null, _applicableFor_decorators, { kind: "field", name: "applicableFor", static: false, private: false, access: { has: function (obj) { return "applicableFor" in obj; }, get: function (obj) { return obj.applicableFor; }, set: function (obj, value) { obj.applicableFor = value; } }, metadata: _metadata }, _applicableFor_initializers, _applicableFor_extraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
        __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: function (obj) { return "categoryId" in obj; }, get: function (obj) { return obj.categoryId; }, set: function (obj, value) { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
        __esDecorate(null, null, _eligibilityRules_decorators, { kind: "field", name: "eligibilityRules", static: false, private: false, access: { has: function (obj) { return "eligibilityRules" in obj; }, get: function (obj) { return obj.eligibilityRules; }, set: function (obj, value) { obj.eligibilityRules = value; } }, metadata: _metadata }, _eligibilityRules_initializers, _eligibilityRules_extraInitializers);
        __esDecorate(null, null, _steps_decorators, { kind: "field", name: "steps", static: false, private: false, access: { has: function (obj) { return "steps" in obj; }, get: function (obj) { return obj.steps; }, set: function (obj, value) { obj.steps = value; } }, metadata: _metadata }, _steps_initializers, _steps_extraInitializers);
        __esDecorate(null, null, _requiredDocuments_decorators, { kind: "field", name: "requiredDocuments", static: false, private: false, access: { has: function (obj) { return "requiredDocuments" in obj; }, get: function (obj) { return obj.requiredDocuments; }, set: function (obj, value) { obj.requiredDocuments = value; } }, metadata: _metadata }, _requiredDocuments_initializers, _requiredDocuments_extraInitializers);
        __esDecorate(null, null, _pdfUrl_decorators, { kind: "field", name: "pdfUrl", static: false, private: false, access: { has: function (obj) { return "pdfUrl" in obj; }, get: function (obj) { return obj.pdfUrl; }, set: function (obj, value) { obj.pdfUrl = value; } }, metadata: _metadata }, _pdfUrl_initializers, _pdfUrl_extraInitializers);
        __esDecorate(null, null, _videoUrl_decorators, { kind: "field", name: "videoUrl", static: false, private: false, access: { has: function (obj) { return "videoUrl" in obj; }, get: function (obj) { return obj.videoUrl; }, set: function (obj, value) { obj.videoUrl = value; } }, metadata: _metadata }, _videoUrl_initializers, _videoUrl_extraInitializers);
        __esDecorate(null, null, _isActive_decorators, { kind: "field", name: "isActive", static: false, private: false, access: { has: function (obj) { return "isActive" in obj; }, get: function (obj) { return obj.isActive; }, set: function (obj, value) { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Scholarship = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Scholarship = _classThis;
}();
exports.Scholarship = Scholarship;
