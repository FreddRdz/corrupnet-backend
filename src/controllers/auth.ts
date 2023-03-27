import { Request, Response } from 'express';
import { authService } from '../services/auth';
import { handleHttp } from '../utils/error.handle';

export const authController = {
  register: async ({ body }: Request, res: Response) => {
    try {
      const response = await authService.registerUser(body);
      res.send(response);
      // res.status(201).json({ ok: true, msg: 'User created', status: 201 });
    } catch (error) {
      handleHttp(res, 'ERROR_CREATE_USER');
    }
  },

  login: async ({ body }: Request, res: Response) => {
    try {
      const { email, password } = body;
      const response = await authService.loginUser({ email, password });
      res.send(response);
      // res.status(201).json({ ok: true, msg: 'User created', status: 201 });
    } catch (error) {
      handleHttp(res, 'ERROR_LOGIN_USER');
    }
  },
};
