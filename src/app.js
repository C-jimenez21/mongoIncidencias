import express from 'express';
import dotenv from 'dotenv';
import {appIncidencias} from './routers/incidencias.js' 
import {servidor} from './config/server.js'

dotenv.config()

const appExpress = express();

appExpress.use(express.json());

appExpress.use('/prueba', appI ncidencias);

// escuchar servidor
appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});