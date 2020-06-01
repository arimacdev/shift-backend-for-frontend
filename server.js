import express from 'express';
import constants from './src/config/constants';
import middleware from './src/config/middleware';
import apiRoutes from './src/modules/index';

const app = express();
middleware(app);
apiRoutes(app);

app.listen(8080, () =>
  console.log(`Shift BFF is running on port ${8080} on ${process.env.ENV} mode`)
);
