import { Router, Request, Response } from 'express';
import { imageFilterRouter } from './imageFilter/routes/imageFilter.router'

const router: Router = Router();
router.use('/', imageFilterRouter);
export const IndexRouter: Router = router;