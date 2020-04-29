const express = require('express');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const expenseRouter = require('./routers/expenseRouter');

const app = express();

dotenv.config({
  path: './config.env',
});

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connection successfull');
  });
//port
const port = process.env.PORT || 3000;

// dotenv

app.use('/expense/api', expenseRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
