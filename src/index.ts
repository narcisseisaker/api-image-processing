import express from 'express';
import routes from './routes/index';
import cacher from './utilities/cacher';
const app = express();
const port: number = 3000;
app.use('/api', cacher, routes);
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/api/images`);
});
export default app;
