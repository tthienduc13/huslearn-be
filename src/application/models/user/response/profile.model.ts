import { AutoMap } from '@automapper/classes';

export class UserProfileResponse {
  @AutoMap()
  name: string;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  image: string;
}
