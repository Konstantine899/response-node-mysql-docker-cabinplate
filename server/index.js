const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());

// 'Access-Control-Allow-Origin': true

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `Приложение прослушивается на порту ${process.env.REACT_APP_SERVER_PORT}`
  );
});

app.get('/test', (req, res) => {
  const { table } = req.query;

  pool.query(`select * from ${table}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});
