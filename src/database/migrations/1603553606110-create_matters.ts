import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMatters1603553606110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'matters',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'teacher',
            type: 'varchar',
          },

          {
            name: 'classroom_id',
            type: 'integer',
          },
        ],

        foreignKeys: [
          {
            name: 'ClassroomMatter',
            columnNames: ['classroom_id'],
            referencedTableName: 'classes',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('matters');
  }
}
