import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTasks1603553651880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "matter_id",
            type: "integer",
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "description",
            type: "text",
          },

          {
            name: "deliveryTime",
            type: "text",
          },
        ],

        foreignKeys: [
          {
            name: "TaskMatter",
            columnNames: ["matter_id"],
            referencedTableName: "matters",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}
