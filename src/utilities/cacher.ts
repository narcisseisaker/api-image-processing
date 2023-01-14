import express from 'express';
import * as fs from 'fs';
import path from 'path';

/* Cacher is a middleware used here to intercept client request and verify 
   if the file is already exist. If found, it's send to the client. if not, 
   the middleware will pass the request to the resizeimage function which will
  resizeimage, store and send it back to the client.
  The next() function is used to allow the next function to run. In our case,
   the next function is the resizeimage() function imported in index file in the
    root directory of the project and contain in the routes parameter of the
     get verb) */

const cacher = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const filename: string = req.query.filename as string;
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);

  if (
    fs.existsSync(
      path.resolve(`./assets/thumb/${filename}_thumb_${width}_${height}.jpg`)
    )
  ) {
    res.sendFile(
      path.resolve(`./assets/thumb/${filename}_thumb_${width}_${height}.jpg`)
    );
  } else {
    next();
  }
};

export default cacher;
