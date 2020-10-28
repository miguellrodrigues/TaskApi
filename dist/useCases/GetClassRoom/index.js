"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassRoomController = exports.getClassRoomUseCase = void 0;
const GetClassRoomController_1 = require("./GetClassRoomController");
const GetClassRoomUseCase_1 = require("./GetClassRoomUseCase");
const getClassRoomUseCase = new GetClassRoomUseCase_1.GetClassRoomUseCase();
exports.getClassRoomUseCase = getClassRoomUseCase;
const getClassRoomController = new GetClassRoomController_1.GetClassRoomController(getClassRoomUseCase);
exports.getClassRoomController = getClassRoomController;
