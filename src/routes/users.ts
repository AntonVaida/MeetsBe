import express from 'express';

import * as productsController from '../controllers/users';

export const router = express.Router();

router.get('/', productsController.getAll);
router.get('/:userId', productsController.getSingleWithRandomImg);