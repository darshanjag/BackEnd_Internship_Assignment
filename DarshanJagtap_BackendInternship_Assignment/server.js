const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const expenseRouter = require('./routers/expenseRouter');
const userRouter = require('./routers/userRouter');
const budgetRouter = require('./routers/budgetRouter');
const categoryRouter = require('./routers/categoryRouter');
const viewRouter = require('./routers/viewRouter')

const app = express();

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
//body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser());


app.use((req,res,next)=>{
  next();
})
// parse application/json
app.use(bodyParser.json())

// dotenv
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

//routes

app.use('/',viewRouter)
app.use('/expense/api', expenseRouter);
app.use('/expense/api/users', userRouter);
app.use('/expense/api/budget',budgetRouter);
app.use('/expense/api/category',categoryRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    msg: err.message
  })

})

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});