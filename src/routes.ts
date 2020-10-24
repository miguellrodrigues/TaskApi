import { Router } from "express";
import { createMatterController } from "./useCases/Matter/CreateMatter";
import { getMatterController } from "./useCases/Matter/GetMatter";

const router = Router();

router.post('/matters', (request, response) => {
    return createMatterController.handle(request, response);
});

router.get('/matters', (request, response) => {
    return getMatterController.handle(request, response);
});

export { router }