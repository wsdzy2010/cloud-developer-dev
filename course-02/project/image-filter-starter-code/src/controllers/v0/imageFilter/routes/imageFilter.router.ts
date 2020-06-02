import { Router, Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from '../../../../util/util';

const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
    let { image_url } = req.query;
    let list: Array<String> = [];
    let local_path = await filterImageFromURL(image_url);
    list.push(local_path);
    res.status(200).send(`Filtered image local path is ${local_path}`);
});

export const imageFilterRouter: Router = router;