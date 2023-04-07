import { Request, Response } from 'express';
import * as productsServices from '../services/users';

export const getAll = async (req: Request, res: Response) => {
  try {
    const usersData = await productsServices.getAllUsers();

    if (!usersData) {
      res.sendStatus(404);
      return;
    }

    res.status(200);
    res.send(usersData);
  } catch (error) {
    res.sendStatus(404);
  }
};

export const getSingleWithRandomImg = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await productsServices.getSingleByIdWithRandomImg(userId);

    if (!user) {
      res.sendStatus(404);
      return;
    }

    res.send(user);
  } catch (error) {
    res.sendStatus(404);
  }
};