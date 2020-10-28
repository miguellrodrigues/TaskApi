"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMatterUseCase = void 0;
const typeorm_1 = require("typeorm");
const Matter_1 = __importDefault(require("../../database/entities/Matter"));
const ClassRoom_1 = __importDefault(require("../../database/entities/ClassRoom"));
class CreateMatterUseCase {
    async execute(data) {
        const classesRepository = typeorm_1.getRepository(ClassRoom_1.default);
        const mattersRepository = typeorm_1.getRepository(Matter_1.default);
        const matterAlreadyExists = await mattersRepository.findOne({
            name: data.name,
        });
        if (matterAlreadyExists) {
            throw new Error('Matter already exists');
        }
        try {
            const matter = mattersRepository.create(data);
            const classRoom = await classesRepository.findOneOrFail({
                name: data.classroom,
            }, { relations: ['matters'] });
            classRoom.matters.push(matter);
            await classesRepository.save(classRoom);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.CreateMatterUseCase = CreateMatterUseCase;
