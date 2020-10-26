import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { IUser } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  public async find(): Promise<IUser[]> {
    return this.users;
  }

  public async create(user: IUser): Promise<IUser> {
    this.users.push(user);
    return user;
  }
}

export default UsersRepository;
