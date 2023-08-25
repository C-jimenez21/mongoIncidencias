import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/server.js'

import passport from './helpers/passport.js';
import {appIncidencias} from './routers/incidencias.js' 
import {appTrainers} from './routers/trainer.js' 
import {appSalon} from './routers/salon.js' 
import {appLogin} from './routers/Login.js' 
import { validatePermissions } from './middlewares/permissions.js';

dotenv.config()

const appExpress = express();

appExpress.use(express.json());

appExpress.use('/incidencia', passport.authenticate('bearer', { session: false }), validatePermissions, appIncidencias);
appExpress.use('/trainer',  passport.authenticate('bearer', { session: false }), validatePermissions, appTrainers);
appExpress.use('/area',  passport.authenticate('bearer', { session: false }), validatePermissions, appSalon);
appExpress.use('/login', appLogin);

// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});