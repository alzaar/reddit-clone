import express from 'express';

//Importing Controllers
import basicController from './controllers/basiccontroller';
import userController from './controllers/usercontroller';

const routes = express();

//Setting up Routes
routes.get('/', basicController.get);
routes.get('/signup', userController.post);


export default routes;
