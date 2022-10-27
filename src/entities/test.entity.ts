import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'test_table' })
export class TestEntity {
  @PrimaryColumn('text')
  id: string;

  @PrimaryColumn({ type: 'int', default: 1 })
  version: number;
}
