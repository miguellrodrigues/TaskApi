"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaskUseCase = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = __importDefault(require("../../database/entities/Task"));
class GetTaskUseCase {
    async execute(data) {
        const tasksRepository = typeorm_1.getRepository(Task_1.default);
        const task = tasksRepository.findOneOrFail({ name: data.name }, { relations: ["files"] });
        if (!task) {
            throw new Error("Task not exists");
        }
        return task;
    }
    async find() {
        const tasksRepository = typeorm_1.getRepository(Task_1.default);
        const tasks = await tasksRepository.find({
            relations: ["files"],
        });
        return tasks;
    }
}
exports.GetTaskUseCase = GetTaskUseCase;
