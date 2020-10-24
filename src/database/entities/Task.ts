import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Matter from "./Matter";
import TaskFile from "./TaskFile";

@Entity("tasks")
export default class Task {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  deliveryTime: string;

  @OneToMany(() => TaskFile, (file) => file.task, {
    cascade: ["insert", "update", "remove"],
  })
  @JoinColumn({ name: "task_id" })
  files: TaskFile[];

  @ManyToOne(() => Matter, (matter) => matter.tasks)
  @JoinColumn({ name: "matter_id" })
  matter: Matter;
}
