import { getRepository } from 'typeorm';
import ClassRoom from '../../database/entities/ClassRoom';
import { ICreateClassRoomRequestDTO } from './CreateClassRoomDTO';

export class CreateClassRoomUseCase {
  async execute(data: ICreateClassRoomRequestDTO) {
    const classesRepository = getRepository(ClassRoom);

    const classRoomAlreadyExists = await classesRepository.findOne({
      name: data.name,
    });

    if (classRoomAlreadyExists) {
      throw new Error('ClassRoom already exists');
    }

    try {
      const classRoom = classesRepository.create(data);

      await classesRepository.save(classRoom);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
