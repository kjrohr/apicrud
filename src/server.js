const express = require('express');
const bodyParser = require('body-parser');
const util = require('../lib/util.js');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
  util.debug('Server is running on port: ', port);
});
