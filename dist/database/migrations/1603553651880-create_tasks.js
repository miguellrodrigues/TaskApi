"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTasks1603553651880 = void 0;
const typeorm_1 = require("typeorm");
class createTasks1603553651880 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("tasks");
    }
}
exports.createTasks1603553651880 = createTasks1603553651880;
