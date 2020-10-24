"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatterController = exports.getMatterUseCase = void 0;
const GetMatterUseCase_1 = require("./GetMatterUseCase");
const GetMatterController_1 = require("./GetMatterController");
const getMatterUseCase = new GetMatterUseCase_1.GetMatterUseCase();
exports.getMatterUseCase = getMatterUseCase;
const getMatterController = new GetMatterController_1.GetMatterController(getMatterUseCase);
exports.getMatterController = getMatterController;
