import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEpisodes1626178411006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "episodes",
        columns: [
          {
            name: "id",
            type: "uuid",
            generationStrategy: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "episode",
            type: "number",
          },
          {
            name: "thumbnail",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("episodes");
  }
}
