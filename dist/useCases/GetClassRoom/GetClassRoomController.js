"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassRoomController = void 0;
class GetClassRoomController {
    constructor(getClassRoomUseCase) {
        this.getClassRoomUseCase = getClassRoomUseCase;
    }
    async handle(request, response) {
        const { name } = request.params;
        const data = { name: name };
        try {
            const classroom = await this.getClassRoomUseCase.execute(data);
            return response.status(200).json(classroom);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors',
            });
        }
    }
    async find(request, response) {
        try {
            const classes = await this.getClassRoomUseCase.find();
            return response.status(200).json(classes);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors',
            });
        }
    }
}
exports.GetClassRoomController = GetClassRoomController;
