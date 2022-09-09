import express from 'express';

import { routes } from './routes';

export function runServer() {
  const app = express();

  app.use(routes);

  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  });
}
