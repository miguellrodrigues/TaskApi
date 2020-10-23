import { Router } from "express";
import { createMatterController } from "./useCases/CreateMatter";

const router = Router();

router.get('/tasks', (request, response) => {
    return createMatterController.handle(request, response);
});

export { router }