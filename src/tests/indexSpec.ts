/* 
Here we test the validity of the endpoint /api/images.

*/

import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

console.log('----------------------\nResults of the Tests\n----------------------')
describe('Test of /api/images', () => {
  it('Expects endpoint /api/images status to be 200', async () => {
    const response = await request.get('/api/images');

    expect(response.status).toBe(200);
    //done();
  });
});

