import { Injectable } from '@nestjs/common';
import { IUsersService } from 'src/users/interfaces/user-service.interface';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersService implements IUsersService {
  private users: UserDto[] = [{ id: 3, name: 'ddd', age: 158 }, { id: 1, name: 'aaa', age: 158 }]

  async findAll(): Promise<UserDto[]> {
    return this.users;
  }

  async findOne(id: number): Promise<UserDto> {
    return this.users.find((user) => user.id === id)
  }

  async create() {
    console.log('service create user successfully');
  }

  async edit() {
    // edit
  }

  async remove() {
    // remove
  }
}
