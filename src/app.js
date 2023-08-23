import express from 'express';
import dotenv from 'dotenv';
import appPruebas from './routers/pruebasRouter.js' 
import {servidor} from './config/server.js'

dotenv.config()

const appExpress = express();

appExpress.use(express.json());

appExpress.use('/prueba', appPruebas);

// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});