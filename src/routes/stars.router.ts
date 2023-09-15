import { Router } from 'express'
import { getStarsController } from '../controller/stars/getStars.controller';
import { getStarsByIdController } from '../controller/stars/getStarsById.controller';
import { postStarsController } from '../controller/stars/createStars.controller';
import { validateStarBody } from '../middlewares/validationMiddleware';

export const router = Router();

router.get('/', getStarsController)
router.get('/:name', getStarsByIdController)
router.post('/', validateStarBody, postStarsController)
