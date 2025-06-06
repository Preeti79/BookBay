const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const routerPath = require('./routes/router');

app.use(bodyParser.json());

app.use('/', routerPath);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});