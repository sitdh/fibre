import { Repository } from './repository.entity';

export interface UserMeta {
  access_token  : string;
  avatar_url    : string;
  bio           : string;
  blog          : string;
  display_name  : string;
  profile       : string;
  profile_url   : string;
  provider      : string;
  public_repos  : number;
  repos_url     : string;
  uid           : string;
  username      : string;
  owner         : string;
  repos?        : Repository;
}
