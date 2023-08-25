import { getAllTrainers, getTrainersById }   from '../versions/v1/getDataV1.js'
//import { getAllIncidenciasV2 } from '../versions/v2/getDataV2.js'
import { getAllTrainersV3, getIncidenciasByDate } from '../versions/v3/getDataV3.js'
import {  postNewTrainerV3 } from '../versions/v3/postDataV3.js';
import { deleteAnyoneById } from '../versions/v1/delete.js';
//import {limitUsuario} from '../config/limit.js'
//import passportHelper from '../config/passportHelpert.js'
import Router from 'express';
import routesVersioning  from 'express-routes-versioning';

const appTrainers = Router();
const version = routesVersioning();
//Headers 'Authorization: Bearer ....'
//appTrainers.use(limitUsuario(), passportHelper.authenticate('bearer', { session: false }));
//Headers 'Accept-Version: ~1.0.0' 

/**
 * @VERSION ~1.0.0 -> Lista todas los trainers registrados
 * @VERSION ~3.5.0-> Lista todas los trainers registrados pero fomateando su salida con valores diferentes a los del backend
 */

appTrainers.get('/',  version({
    "~1.0.0": getAllTrainers,
    "~3.5.0": getAllTrainersV3
}));

/**
 * @VERSION ~1.0.0 -> Lista todas las trainers por id
 */
appTrainers.get('/:id', version({
     "~1.0.0": getTrainersById,
 }));

/**
 * @VERSION ~3.5.0-> Inserta una trainer, pero el id se agregara automaticamente ademas la estructura de datos de envio es diferente a la del backend dotando esta version de mayor seguridad
 */
appTrainers.post('/', version({ 
    "~3.5.0": postNewTrainerV3
}));

/**
 * @VERSION ~1.0.0-> Elimina el trainer con el id seleccionado
 */
appTrainers.delete('/:id', version({ 
    "~1.0.0": deleteAnyoneById
}));

export {
    appTrainers
};