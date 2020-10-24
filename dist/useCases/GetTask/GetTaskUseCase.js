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
        const task = tasksRepository.findOneOrFail({ name: data.name }, { relations: ['files'] });
        if (!task) {
            throw new Error('Task not exists');
        }
        return task;
    }
    async find() {
        const tasksRepository = typeorm_1.getRepository(Task_1.default);
        const tasks = await tasksRepository.find({
            relations: ['files'],
        });
        return tasks;
    }
    async remainingTime(id) {
        const tasksRepository = typeorm_1.getRepository(Task_1.default);
        const task = await tasksRepository.findOne(id);
        if (!task) {
            throw new Error('Task not found');
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        var delta = Math.abs(Number(task.deliveryTime) - new Date().getTime()) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta % 60;
        let s = '';
        if (days > 0) {
            s = `${days} dia's ${hours.toFixed(0)} hora's ${minutes.toFixed(0)} minuto's ${seconds.toFixed(0)} segundos`;
        }
        else {
            s = `${hours.toFixed(0)} hora's ${minutes.toFixed(0)} minuto's ${seconds.toFixed(0)} segundos`;
        }
        return s;
    }
}
exports.GetTaskUseCase = GetTaskUseCase;
