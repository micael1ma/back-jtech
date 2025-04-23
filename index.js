const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

const db = require('./database/db');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});