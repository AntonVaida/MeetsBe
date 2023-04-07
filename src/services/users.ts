import fs from 'fs/promises';
import { User } from '../types/User';
import path from 'path';
import { Request, Response } from 'express';

const ALL_USERS_PATH = path.resolve('src', 'data', 'user.json');

const read = async (path: string): Promise<User[] | null> => {
  const users = await fs.readFile(path, 'utf-8');

  return JSON.parse(users);
};


export const getAllUsers = async () => {
  const users = await read(ALL_USERS_PATH);

  if (!users) {
    return null;
  }

  return users;
};

export const getSingleByIdWithRandomImg = async (req: Request, userId: string) => {
  const users = await read(ALL_USERS_PATH);

  if (!users?.length) {
    return null;
  } 

  const selectUser = users.find(user => user.userId === Number(userId));

  if (!selectUser) {
    return null;
}

const randomIndex = Math.floor(Math.random() * 6);
const imagePath = path.join(__dirname, 'public', 'img', 'imageCats', `img${randomIndex}.jpg`);
const imageUrl = `${req.protocol}://${req.get('host')}/${path.relative(__dirname, imagePath)}`;

  return {
    ...selectUser,
    ImageUrl: imageUrl
  };
};