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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Matter_1 = __importDefault(require("./Matter"));
const TaskFile_1 = __importDefault(require("./TaskFile"));
let Task = class Task {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("increment"),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Task.prototype, "deliveryTime", void 0);
__decorate([
    typeorm_1.OneToMany(() => TaskFile_1.default, (file) => file.task, {
        cascade: ["insert", "update", "remove"],
    }),
    typeorm_1.JoinColumn({ name: "task_id" }),
    __metadata("design:type", Array)
], Task.prototype, "files", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Matter_1.default, (matter) => matter.tasks),
    typeorm_1.JoinColumn({ name: "matter_id" }),
    __metadata("design:type", Matter_1.default)
], Task.prototype, "matter", void 0);
Task = __decorate([
    typeorm_1.Entity("tasks")
], Task);
exports.default = Task;
