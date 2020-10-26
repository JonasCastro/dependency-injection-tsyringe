import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UserService from '@modules/users/services/UserService';

export default class UsersController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const userService = container.resolve(UserService);

    const user = await userService.getAll();
    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, email } = request.body;

    const userService = container.resolve(UserService);

    const user = await userService.create({
      firstName,
      lastName,
      email,
    });

    return response.json(user);
  }
}
