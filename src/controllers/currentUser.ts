import { Request, Response } from 'express';
import { BadRequestError } from '@a7common/tix';
import jwt from 'jsonwebtoken';

export const currentUserCtrl = async (req: Request, res: Response) => {
  res.status(200).send({ currentUser: req.currentUser || null });
};
