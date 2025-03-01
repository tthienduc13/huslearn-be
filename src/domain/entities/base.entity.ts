import { AutoMap } from '@automapper/classes';

export class Base {
  @AutoMap()
  id: string;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;

  constructor() {
    this.id = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
