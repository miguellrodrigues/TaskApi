"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMatterUseCase = void 0;
const typeorm_1 = require("typeorm");
const Matter_1 = __importDefault(require("../../database/entities/Matter"));
class CreateMatterUseCase {
    async execute(data) {
        const mattersRepository = typeorm_1.getRepository(Matter_1.default);
        const matterAlreadyExists = await mattersRepository.findOne({
            name: data.name,
        });
        if (matterAlreadyExists) {
            throw new Error("Matter already exists");
        }
        try {
            const matter = mattersRepository.create(data);
            await mattersRepository.save(matter);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.CreateMatterUseCase = CreateMatterUseCase;
