import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Matter from './Matter';

@Entity('classes')
export default class ClassRoom {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Matter, (matter) => matter.classRoom, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'classroom_id' })
  matters: Matter[];
}
