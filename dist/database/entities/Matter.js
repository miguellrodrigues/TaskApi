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
const ClassRoom_1 = __importDefault(require("./ClassRoom"));
const ClassRoom_2 = __importDefault(require("./ClassRoom"));
const Task_1 = __importDefault(require("./Task"));
let Matter = class Matter {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Matter.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Matter.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Matter.prototype, "teacher", void 0);
__decorate([
    typeorm_1.OneToMany(() => Task_1.default, (task) => task.matter, {
        cascade: ['insert', 'update', 'remove'],
    }),
    typeorm_1.JoinColumn({ name: 'matter_id' }),
    __metadata("design:type", Array)
], Matter.prototype, "tasks", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ClassRoom_1.default, (classroom) => classroom.matters),
    typeorm_1.JoinColumn({ name: 'classroom_id' }),
    __metadata("design:type", ClassRoom_2.default)
], Matter.prototype, "classRoom", void 0);
Matter = __decorate([
    typeorm_1.Entity('matters')
], Matter);
exports.default = Matter;
