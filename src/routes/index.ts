import express, { Router } from 'express';
import resizeimage from '../utilities/resizeimage';

const routes: Router = express.Router();


routes.get('/images', (req: express.Request, res: express.Response) => {
  const fileName: string = req.query.filename as string;
  const fileWidth: number = Number(req.query.width);
  const fileHeight: number = Number(req.query.height);
  console.log(req.url);
  resizeimage.resizeimage(req, res, fileName, fileWidth, fileHeight);
  
});
export default routes;
