import { Router } from "express";

import { createMatterController } from "./useCases/CreateMatter";
import { getMatterController } from "./useCases/GetMatter";
import { createTaskController } from "./useCases/CreateTask";
import { getTasksController } from "./useCases/GetTask";

const router = Router();

router.get("/matters", (request, response) => {
  return getMatterController.find(request, response);
});

router.post("/matters", (request, response) => {
  return createMatterController.handle(request, response);
});

router.get("/matters/:name", (request, response) => {
  return getMatterController.handle(request, response);
});

router.get("/tasks", (request, response) => {
  return getTasksController.find(request, response);
});

router.post("/tasks", (request, response) => {
  return createTaskController.handle(request, response);
});

router.get("/tasks/:name", (request, response) => {
  return getTasksController.handle(request, response);
});

export { router };
