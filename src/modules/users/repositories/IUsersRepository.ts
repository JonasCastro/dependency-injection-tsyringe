import { IUser } from '../infra/entities/User';

export default interface IUsersRepository {
  find(): Promise<IUser[]>;
  create(data: IUser): Promise<IUser>;
}
