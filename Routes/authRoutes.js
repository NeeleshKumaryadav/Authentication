import express from 'express';
import { authController, loginController } from '../Controller/authController.js';

//route object
const router = express.Router();

//post route for register
router.post('/register',authController);

//post route for login
router.post('/login',loginController)

export default router;