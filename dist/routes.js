"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateMatter_1 = require("./useCases/CreateMatter");
const GetMatter_1 = require("./useCases/GetMatter");
const CreateTask_1 = require("./useCases/CreateTask");
const GetTask_1 = require("./useCases/GetTask");
const CreateClassRoom_1 = require("./useCases/CreateClassRoom");
const GetClassRoom_1 = require("./useCases/GetClassRoom");
const router = express_1.Router();
exports.router = router;
router.get('/classes', (request, response) => {
    return GetClassRoom_1.getClassRoomController.find(request, response);
});
router.get('/classes/:name', (request, response) => {
    return GetClassRoom_1.getClassRoomController.handle(request, response);
});
router.post('/classes', (request, response) => {
    return CreateClassRoom_1.createClassRoomController.handle(request, response);
});
router.get('/matters', (request, response) => {
    return GetMatter_1.getMatterController.find(request, response);
});
router.post('/matters', (request, response) => {
    return CreateMatter_1.createMatterController.handle(request, response);
});
router.get('/matters/:name', (request, response) => {
    return GetMatter_1.getMatterController.handle(request, response);
});
router.get('/tasks', (request, response) => {
    return GetTask_1.getTasksController.find(request, response);
});
router.post('/tasks', (request, response) => {
    return CreateTask_1.createTaskController.handle(request, response);
});
router.get('/tasks/:name', (request, response) => {
    return GetTask_1.getTasksController.handle(request, response);
});
router.get('/tasks/remainingTime/:id', (request, response) => {
    return GetTask_1.getTasksController.getRemainingTime(request, response);
});
