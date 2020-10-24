"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiles1603553647983 = void 0;
const typeorm_1 = require("typeorm");
class createFiles1603553647983 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "files",
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
                    name: "url",
                    type: "varchar",
                },
                {
                    name: "task_id",
                    type: "integer",
                },
            ],
            foreignKeys: [
                {
                    name: "FileTask",
                    columnNames: ["task_id"],
                    referencedTableName: "tasks",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("files");
    }
}
exports.createFiles1603553647983 = createFiles1603553647983;
