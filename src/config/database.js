const mysql = require('mysql');

import constants from './constants';

// mongoose.Promise = global.Promise;

// try {
//   mongoose.connect(constants.DB_URL);
// } catch (err) {
//   mongoose.createConnection(constants.DB_URL);
// }

// mongoose.connection
//   .once('open', () => console.log('MongoDB Running'))
//   .on('error', (e) => {
//     throw e;
//   });

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'pmtool-db',
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

module.exports = connection;
