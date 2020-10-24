"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatterController = exports.createMatterUseCase = void 0;
const CreateMatterController_1 = require("./CreateMatterController");
const CreateMatterUseCase_1 = require("./CreateMatterUseCase");
const createMatterUseCase = new CreateMatterUseCase_1.CreateMatterUseCase();
exports.createMatterUseCase = createMatterUseCase;
const createMatterController = new CreateMatterController_1.CreateMatterController(createMatterUseCase);
exports.createMatterController = createMatterController;
