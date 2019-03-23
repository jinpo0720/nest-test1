import { UserDto } from '../dto/user.dto';

export interface IUsersService {

  findAll(): Promise<UserDto[]>;

  findOne(id: number): Promise<UserDto>;

  create();

  edit();

  remove();

}
