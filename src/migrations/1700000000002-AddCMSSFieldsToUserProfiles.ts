import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCMSSFieldsToUserProfiles1700000000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user_profiles');
    
    // List of CMSS fields to add
    const cmssFields = [
      { name: 'lowLiteracyTaluka', type: 'boolean', default: false },
      { name: 'childrenOfMartyrs', type: 'boolean', default: false },
      { name: 'shramikCard', type: 'boolean', default: false },
      { name: 'disabilityCertificate', type: 'boolean', default: false },
      { name: 'widowCertificate', type: 'boolean', default: false },
      { name: 'orphanCertificate', type: 'boolean', default: false },
      { name: 'tyaktaCertificate', type: 'boolean', default: false },
    ];

    for (const field of cmssFields) {
      const existingColumn = table?.findColumnByName(field.name);
      if (!existingColumn) {
        await queryRunner.addColumn(
          'user_profiles',
          new TableColumn({
            name: field.name,
            type: 'boolean',
            default: false,
            isNullable: true,
          }),
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user_profiles');
    
    const cmssFields = [
      'lowLiteracyTaluka',
      'childrenOfMartyrs',
      'shramikCard',
      'disabilityCertificate',
      'widowCertificate',
      'orphanCertificate',
      'tyaktaCertificate',
    ];

    for (const fieldName of cmssFields) {
      const column = table?.findColumnByName(fieldName);
      if (column) {
        await queryRunner.dropColumn('user_profiles', fieldName);
      }
    }
  }
}



