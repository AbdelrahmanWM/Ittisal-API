import express from 'express';
import logger from 'morgan';
import createError from "http-errors";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.use((req, res, next) => {
    next(createError(404));
});
  

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({ error: err.message });
});

export default app;
