import { CreateClassRoomController } from './CreateClassRoomController';
import { CreateClassRoomUseCase } from './CreateClassRoomUseCase';

const createClassRoomUseCase = new CreateClassRoomUseCase();

const createClassRoomController = new CreateClassRoomController(
  createClassRoomUseCase,
);

export { createClassRoomUseCase, createClassRoomController };
