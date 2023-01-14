 /* Access initial file of the full directory,  resize the file then after 
 its storage in the thumb directory within assets directory, send the resized
 file to the client.
 When error occur, it is send to the client by the server 
 */
import express from 'express';
import path from 'path';
import sharp from 'sharp';
const resizeimage = async (req: express.Request, res: express.Response, _fileName: string,filewidth: number,
   fileHeight: number): Promise<void> => {
//convert query string parameter
  const fileName: string = req.query.filename as string;
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
try {
    await sharp(path.resolve(`./assets/full/${fileName}.jpg`))
      .resize(filewidth, fileHeight)
      .toFile(
        path.resolve(`./assets/thumb/${fileName}_thumb_${width}_${height}.jpg`)
      )
      .then(() => {
        res.sendFile(
          path.resolve(
            `./assets/thumb/${fileName}_thumb_${width}_${height}.jpg`
          )
        );
      })
      .catch((error) => {
        res.send(`error occur when processing image:${error}`);
      });
  } catch (error) {
    res.send(
      `The processing error occur processing the image remedy and try again ${error}`
    );
  }
};
export = {
  resizeimage
};
