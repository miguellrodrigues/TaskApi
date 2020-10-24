"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatterUseCase = void 0;
const typeorm_1 = require("typeorm");
const Matter_1 = __importDefault(require("../../database/entities/Matter"));
class GetMatterUseCase {
    async execute(data) {
        const mattersRepository = typeorm_1.getRepository(Matter_1.default);
        const matter = await mattersRepository.findOneOrFail({
            name: data.name,
        }, { relations: ["tasks", "tasks.files"] });
        if (!matter) {
            throw new Error("Matter not exists");
        }
        return matter;
    }
    async find() {
        const mattersRepository = typeorm_1.getRepository(Matter_1.default);
        const matters = await mattersRepository.find({
            relations: ["tasks", "tasks.files"],
        });
        return matters;
    }
}
exports.GetMatterUseCase = GetMatterUseCase;
