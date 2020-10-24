"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatters1603553606110 = void 0;
const typeorm_1 = require("typeorm");
class createMatters1603553606110 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "matters",
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
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "teacher",
                    type: "varchar",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("matters");
    }
}
exports.createMatters1603553606110 = createMatters1603553606110;
