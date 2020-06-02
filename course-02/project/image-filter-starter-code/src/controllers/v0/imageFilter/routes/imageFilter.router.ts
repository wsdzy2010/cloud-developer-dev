import { Router, Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from '../../../../util/util';

const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
    let { image_url } = req.query;
    let list: Array<String> = [];
    try {
        let local_path = await filterImageFromURL(image_url);
        list.push(local_path);
        res.status(200).sendfile(local_path);
    }
    catch (e) {
        res.status(402).send(`Error: ${e.message}`);
    }
});

export const imageFilterRouter: Router = router;