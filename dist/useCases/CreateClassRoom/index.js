"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassRoomController = exports.createClassRoomUseCase = void 0;
const CreateClassRoomController_1 = require("./CreateClassRoomController");
const CreateClassRoomUseCase_1 = require("./CreateClassRoomUseCase");
const createClassRoomUseCase = new CreateClassRoomUseCase_1.CreateClassRoomUseCase();
exports.createClassRoomUseCase = createClassRoomUseCase;
const createClassRoomController = new CreateClassRoomController_1.CreateClassRoomController(createClassRoomUseCase);
exports.createClassRoomController = createClassRoomController;
