import { GetClassRoomController } from './GetClassRoomController';
import { GetClassRoomUseCase } from './GetClassRoomUseCase';

const getClassRoomUseCase = new GetClassRoomUseCase();

const getClassRoomController = new GetClassRoomController(getClassRoomUseCase);

export { getClassRoomUseCase, getClassRoomController };
