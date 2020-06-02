import express from 'express';
import constants from './src/config/constants';
import middleware from './src/config/middleware';
import apiRoutes from './src/modules/index';
var mysql = require('mysql');

const app = express();
middleware(app);
apiRoutes(app);

app.listen(constants.PORT, () =>
  console.log(
    `Shift BFF is running on port ${constants.PORT} on ${process.env.ENV} mode`
  )
);
