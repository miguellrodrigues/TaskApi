"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassRoomUseCase = void 0;
const typeorm_1 = require("typeorm");
const ClassRoom_1 = __importDefault(require("../../database/entities/ClassRoom"));
class GetClassRoomUseCase {
    async execute(data) {
        const classesRepository = typeorm_1.getRepository(ClassRoom_1.default);
        const classRoom = await classesRepository.findOneOrFail({ name: data.name }, { relations: ['matters', 'matters.tasks', 'matters.tasks.files'] });
        if (!classRoom) {
            throw new Error('Class not exists');
        }
        return classRoom;
    }
    async find() {
        const classesRepository = typeorm_1.getRepository(ClassRoom_1.default);
        const classes = await classesRepository.find({
            relations: ['matters', 'matters.tasks', 'matters.tasks.files'],
        });
        return classes;
    }
}
exports.GetClassRoomUseCase = GetClassRoomUseCase;
