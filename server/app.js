//Imports
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/reddit-db', { useNewUrlParser: true }, () => {
  console.log('Connected to Mongo!!');
})

const app = express();

//Middleware
app.use(bodyParser.json());
app.use('/api', routes);

export default app;
