"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassRoomUseCase = void 0;
const typeorm_1 = require("typeorm");
const ClassRoom_1 = __importDefault(require("../../database/entities/ClassRoom"));
class CreateClassRoomUseCase {
    async execute(data) {
        const classesRepository = typeorm_1.getRepository(ClassRoom_1.default);
        const classRoomAlreadyExists = await classesRepository.findOne({
            name: data.name,
        });
        if (classRoomAlreadyExists) {
            throw new Error('ClassRoom already exists');
        }
        try {
            const classRoom = classesRepository.create(data);
            await classesRepository.save(classRoom);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.CreateClassRoomUseCase = CreateClassRoomUseCase;
