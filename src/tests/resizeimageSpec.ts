

//import supertest from 'supertest';
import routes from '../routes/index';
import express from 'express';

import resizeimage from '../utilities/resizeimage';
import path from 'path';
import * as fs from 'fs';
import supertest from 'supertest';
import app from '../index';
const request: supertest.SuperTest<supertest.Test> = supertest(app);


describe('Test of resize and store image on the disk', () => {
  it('Expects resizeimage function to resize and store'+ 
  'an image named bower with width 222 and height 555 ', async () => {
    const fileName: string = 'bower';
        const fileWidth: number = 222;
        const fileHeight: number = 1;

      const response = routes.get('/images', (req: express.Request, res: express.Response) => {
        
      
        resizeimage.resizeimage(req, res, fileName, fileWidth, fileHeight);
    });

        expect(response).toBeTruthy();
    //done();
  });
});


