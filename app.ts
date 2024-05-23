import express from 'express';
import logger from 'morgan';
import createError from "http-errors";
import dotenv from 'dotenv';
import {Request,Response,NextFunction} from 'express';
import routes from './routes';

dotenv.config();
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/users',routes.users);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello, Express!');
});
app.use((req:Request, res:Response, next) => {
    next(createError(404));
});
  

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({ error: err.message });
});

export default app;
