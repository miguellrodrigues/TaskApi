"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaskController = void 0;
class GetTaskController {
    constructor(getTaskUseCase) {
        this.getTaskUseCase = getTaskUseCase;
    }
    async handle(request, response) {
        const { name } = request.params;
        const data = {
            name
        };
        try {
            const task = await this.getTaskUseCase.execute(data);
            return response.status(200).json(task);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors'
            });
        }
    }
    async find(request, response) {
        try {
            const tasks = await this.getTaskUseCase.find();
            return response.status(200).json(tasks);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors'
            });
        }
    }
}
exports.GetTaskController = GetTaskController;
