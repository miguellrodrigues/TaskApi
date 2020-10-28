import { ICreateMatterRequestDTO } from './CreateMatterDTO';
import { getRepository } from 'typeorm';
import Matter from '../../database/entities/Matter';
import ClassRoom from '../../database/entities/ClassRoom';

export class CreateMatterUseCase {
  async execute(data: ICreateMatterRequestDTO) {
    const classesRepository = getRepository(ClassRoom);
    const mattersRepository = getRepository(Matter);

    const matterAlreadyExists = await mattersRepository.findOne({
      name: data.name,
    });

    if (matterAlreadyExists) {
      throw new Error('Matter already exists');
    }

    try {
      const matter = mattersRepository.create(data);

      const classRoom = await classesRepository.findOneOrFail(
        {
          name: data.classroom,
        },
        { relations: ['matters', 'matters.tasks', 'matters.tasks.files'] },
      );

      classRoom.matters.push(matter);

      await classesRepository.save(classRoom);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
