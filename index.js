const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');
const deviceRouter = require('./routes/deviceRouter');
const repairRouter = require('./routes/repairRouter');
const userRouter = require('./routes/userRouter');

const db = require('./database/db');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', authRouter);
app.use('/api', deviceRouter);
app.use('/api', repairRouter);
app.use('/api', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
