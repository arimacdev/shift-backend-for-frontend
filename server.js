import express from 'express';
import constants from './src/config/constants';
import middleware from './src/config/middleware';
import apiRoutes from './src/modules/index';
var mysql = require('mysql');

const app = express();
middleware(app);
apiRoutes(app);

// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pmtool_db',
});

dbConn.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.get('/users', (request, response) => {
  // response.send('hi');
  dbConn.query('SELECT * FROM User', (error, result) => {
    if (error) throw error;
    response.send(result);
  });
});
// connect to database
// dbConn.connect();

app.listen(9000, () =>
  console.log(`Shift BFF is running on port ${9000} on ${process.env.ENV} mode`)
);
