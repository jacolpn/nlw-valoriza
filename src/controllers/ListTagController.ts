import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class ListTagController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagService();
        const tags = await listTagsService.execute();

        return res.json(tags);
    }
}

export { ListTagController }