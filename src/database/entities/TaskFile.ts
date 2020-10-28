import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Task from "./Task";

@Entity("files")
export default class TaskFile {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Task, (task) => task.files)
  @JoinColumn({ name: "task_id" })
  task: Task;
}
