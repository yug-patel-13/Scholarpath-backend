import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddFormNameToFormFillRequests1700000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Check if column already exists
    const table = await queryRunner.getTable('form_fill_requests');
    const formNameColumn = table?.findColumnByName('formName');

    if (!formNameColumn) {
      await queryRunner.addColumn(
        'form_fill_requests',
        new TableColumn({
          name: 'formName',
          type: 'varchar',
          isNullable: true,
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('form_fill_requests');
    const formNameColumn = table?.findColumnByName('formName');

    if (formNameColumn) {
      await queryRunner.dropColumn('form_fill_requests', 'formName');
    }
  }
}



