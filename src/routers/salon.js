import { getRoomsById, getAllRooms }   from '../versions/v1/getDataV1.js'
import { postNewIncidencia } from '../versions/v1/postDataV1.js'
//import { getAllIncidenciasV2 } from '../versions/v2/getDataV2.js'
import { getAllTrainersV3, getIncidenciasByDate } from '../versions/v3/getDataV3.js'
import {  postNewComputerV3 } from '../versions/v3/postDataV3.js';

//import {limitUsuario} from '../config/limit.js'
//import passportHelper from '../config/passportHelpert.js'
import Router from 'express';
import routesVersioning  from 'express-routes-versioning';

const appSalon = Router();
const version = routesVersioning();
//Headers 'Authorization: Bearer ....'
//appSalon.use(limitUsuario(), passportHelper.authenticate('bearer', { session: false }));
//Headers 'Accept-Version: 1.0.0' 

/**
 * @VERSION 1.0.0 -> Lista todas los salones registrados
 * @VERSION 3.5.0-> Lista todas los trainers registrados pero fomateando su salida con valores diferentes a los del backend
 */

appSalon.get('/',  version({
    "^1.0.0": getAllRooms,
    "3.5.0": getAllTrainersV3
}));

/**
 * @VERSION 1.1.1 -> Lista todas las salones por id
 */

appSalon.get('/:id', version({
     "^1.1.1": getRoomsById,
 }));

/**
 * @VERSION 3.5.0-> Inserta una trainer, pero el id se agregara automaticamente ademas la estructura de datos de envio es diferente a la del backend dotando esta version de mayor seguridad
 */
appSalon.post('/', version({ 
    "3.5.0": postNewComputerV3
}));


export {
    appSalon
};