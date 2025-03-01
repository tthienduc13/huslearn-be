import { AutoMap } from '@automapper/classes';
import { Base } from '@domain/entities/base.entity';
import { UserType } from '@prisma/client';

export class User extends Base {
  @AutoMap()
  name!: string;

  @AutoMap()
  username!: string;

  @AutoMap()
  email: string;

  @AutoMap()
  password!: string;

  @AutoMap()
  emailVerified!: Date;

  @AutoMap()
  image!: string;

  @AutoMap()
  type: UserType;

  @AutoMap()
  verified: boolean;

  @AutoMap()
  lastSeenAt: Date;

  @AutoMap()
  bannedAt!: Date;

  @AutoMap()
  displayName: boolean;

  @AutoMap()
  flags: number;

  @AutoMap()
  metadata!: Record<string, any>;

  @AutoMap()
  completedOnboarding: boolean;

  constructor() {
    super();
    this.verified = false;
    this.displayName = true;
    this.flags = 0;
    this.completedOnboarding = false;
  }
}
