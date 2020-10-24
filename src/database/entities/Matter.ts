import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

import Task from "./Task";

@Entity("matters")
export default class Matter {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  teacher: string;

  @OneToMany(() => Task, (task) => task.matter, {
    cascade: ["insert", "update", "remove"],
  })
  @JoinColumn({ name: "matter_id" })
  tasks: Task[];
}
