"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClasses1603843513882 = void 0;
const typeorm_1 = require("typeorm");
class createClasses1603843513882 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'classes',
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
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('classes');
    }
}
exports.createClasses1603843513882 = createClasses1603843513882;
