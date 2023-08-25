import Router from 'express';
import { generateToken } from '../middlewares/token.js';

const appLogin = Router();



appLogin.post('/', generateToken)


export {
    appLogin
};