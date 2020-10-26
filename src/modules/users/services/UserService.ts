import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import { IUser } from '../infra/entities/User';

@injectable()
class UserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async getAll(): Promise<IUser[]> {
    const user = await this.usersRepository.find();

    return user;
  }

  async create({ firstName, lastName, email }: IUser): Promise<IUser> {
    const user = await this.usersRepository.create({
      firstName,
      lastName,
      email,
    });

    return user;
  }
}
export default UserService;
