import { IGetTaskRequestDTO } from './GetTaskDTO';
import { getRepository } from 'typeorm';
import Task from '../../database/entities/Task';

export class GetTaskUseCase {
  async execute(data: IGetTaskRequestDTO) {
    const tasksRepository = getRepository(Task);

    const task = tasksRepository.findOneOrFail(
      { name: data.name },
      { relations: ['files'] },
    );

    if (!task) {
      throw new Error('Task not exists');
    }

    return task;
  }

  async find() {
    const tasksRepository = getRepository(Task);

    const tasks = await tasksRepository.find({
      relations: ['files'],
    });

    return tasks;
  }

  async remainingTime(id: string) {
    const tasksRepository = getRepository(Task);

    const task = await tasksRepository.findOne(id);

    if (!task) {
      throw new Error('Task not found');
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    var delta =
      Math.abs(Number(task.deliveryTime) - new Date().getTime()) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;

    let s = '';

    if (days > 0) {
      s = `${days} dia's ${hours.toFixed(0)} hora's ${minutes.toFixed(
        0,
      )} minuto's ${seconds.toFixed(0)} segundos`;
    } else {
      s = `${hours.toFixed(0)} hora's ${minutes.toFixed(
        0,
      )} minuto's ${seconds.toFixed(0)} segundos`;
    }

    return s;
  }
}
