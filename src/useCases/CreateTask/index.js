"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = exports.createTaskUseCase = void 0;
const CreateTaskController_1 = require("./CreateTaskController");
const CreateTaskUseCase_1 = require("./CreateTaskUseCase");
const createTaskUseCase = new CreateTaskUseCase_1.CreateTaskUseCase();
exports.createTaskUseCase = createTaskUseCase;
const createTaskController = new CreateTaskController_1.CreateTaskController(createTaskUseCase);
exports.createTaskController = createTaskController;
