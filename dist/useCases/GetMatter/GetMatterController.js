"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatterController = void 0;
class GetMatterController {
    constructor(getMatterUseCase) {
        this.getMatterUseCase = getMatterUseCase;
    }
    async handle(request, response) {
        const { name } = request.params;
        const data = {
            name: name,
        };
        try {
            const matter = await this.getMatterUseCase.execute(data);
            return response.status(201).json(matter);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || "Unexpected errors",
            });
        }
    }
    async find(request, response) {
        try {
            const matters = await this.getMatterUseCase.find();
            return response.status(200).json(matters);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || "Unexpected errors",
            });
        }
    }
}
exports.GetMatterController = GetMatterController;
