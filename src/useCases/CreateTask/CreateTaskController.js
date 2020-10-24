"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
const Yup = __importStar(require("yup"));
class CreateTaskController {
    constructor(createTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
    }
    async handle(request, response) {
        var { name, description, deliveryDate, files, matter_id } = request.body;
        const validateData = {
            name,
            description,
            deliveryDate,
            files,
            matter_id,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required(),
            deliveryDate: Yup.string().required(),
            matter_id: Yup.string().required(),
            files: Yup.array(Yup.object().shape({
                url: Yup.string().required(),
            })),
        });
        await schema.validate(validateData, {
            abortEarly: false,
        });
        const spl = deliveryDate.split("/");
        let date = new Date(spl[2], --spl[1], spl[0], 23, 59, 0);
        const deliveryTime = String(date.getTime());
        if (!files) {
            files = [];
        }
        const data = {
            name,
            description,
            deliveryTime,
            files,
            matter_id,
        };
        try {
            await this.createTaskUseCase.execute(data);
            return response.status(201).json(data);
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || "Unexpected error",
            });
        }
    }
}
exports.CreateTaskController = CreateTaskController;
