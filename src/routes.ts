import { Express , Request, Response} from 'express';

async function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
}

export default routes;