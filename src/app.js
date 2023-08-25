import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/server.js'

import {appIncidencias} from './routers/incidencias.js' 
import {appTrainers} from './routers/trainer.js' 
import {appSalon} from './routers/salon.js' 

dotenv.config()

const appExpress = express();

appExpress.use(express.json());

appExpress.use('/incidencias', appIncidencias);
appExpress.use('/trainers', appTrainers);
appExpress.use('/salon', appSalon);
appExpress.use('/login', appSalon);

// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});