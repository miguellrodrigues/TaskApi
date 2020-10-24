"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksController = exports.getTaskUseCase = void 0;
const GetTaskController_1 = require("./GetTaskController");
const GetTaskUseCase_1 = require("./GetTaskUseCase");
const getTaskUseCase = new GetTaskUseCase_1.GetTaskUseCase();
exports.getTaskUseCase = getTaskUseCase;
const getTasksController = new GetTaskController_1.GetTaskController(getTaskUseCase);
exports.getTasksController = getTasksController;
