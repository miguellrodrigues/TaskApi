import { getRepository } from 'typeorm';
import ClassRoom from '../../database/entities/ClassRoom';
import { IGetClassRoomRequestDTO } from './GetClassRoomDTO';

export class GetClassRoomUseCase {
  async execute(data: IGetClassRoomRequestDTO) {
    const classesRepository = getRepository(ClassRoom);

    const classRoom = await classesRepository.findOneOrFail(
      { name: data.name },
      { relations: ['matters', 'matters.tasks', 'matters.tasks.files'] },
    );

    if (!classRoom) {
      throw new Error('Class not exists');
    }

    return classRoom;
  }

  async find() {
    const classesRepository = getRepository(ClassRoom);

    const classes = await classesRepository.find({
      relations: ['matters', 'matters.tasks', 'matters.tasks.files'],
    });

    return classes;
  }
}
