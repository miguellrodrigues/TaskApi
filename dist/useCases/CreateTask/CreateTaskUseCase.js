"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUseCase = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = __importDefault(require("../../database/entities/Task"));
const Matter_1 = __importDefault(require("../../database/entities/Matter"));
class CreateTaskUseCase {
    async execute(data) {
        const tasksRepository = typeorm_1.getRepository(Task_1.default);
        const mattersRepository = typeorm_1.getRepository(Matter_1.default);
        try {
            const task = tasksRepository.create(data);
            const matter = await mattersRepository.findOneOrFail(data.matter_id, {
                relations: ["tasks"],
            });
            matter.tasks.push(task);
            await mattersRepository.save(matter);
        }
        catch (err) {
            throw new Error(err.message || "Unexpected error has ocurred");
        }
    }
}
exports.CreateTaskUseCase = CreateTaskUseCase;
