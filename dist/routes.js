"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateMatter_1 = require("./useCases/CreateMatter");
const GetMatter_1 = require("./useCases/GetMatter");
const CreateTask_1 = require("./useCases/CreateTask");
const GetTask_1 = require("./useCases/GetTask");
const router = express_1.Router();
exports.router = router;
router.get("/matters", (request, response) => {
    return GetMatter_1.getMatterController.find(request, response);
});
router.post("/matters", (request, response) => {
    return CreateMatter_1.createMatterController.handle(request, response);
});
router.get("/matters/:name", (request, response) => {
    return GetMatter_1.getMatterController.handle(request, response);
});
router.get("/tasks", (request, response) => {
    return GetTask_1.getTasksController.find(request, response);
});
router.post("/tasks", (request, response) => {
    return CreateTask_1.createTaskController.handle(request, response);
});
router.get("/tasks/:name", (request, response) => {
    return GetTask_1.getTasksController.handle(request, response);
});
