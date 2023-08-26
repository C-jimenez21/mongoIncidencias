import { getAllIncidencias, getIncidenciasById }   from '../versions/v1/getDataV1.js'
import { postNewIncidencia } from '../versions/v1/postDataV1.js'
//import { getAllIncidenciasV2 } from '../versions/v2/getDataV2.js'
import { getAllIncidenciasV3, getIncidenciasByDate } from '../versions/v3/getDataV3.js'
import {  postNewIncidenciaV3 } from '../versions/v3/postDataV3.js';
import { deleteAnyoneById } from '../versions/v1/delete.js';
//import {limitUsuario} from '../config/limit.js'
//import passportHelper from '../config/passportHelpert.js'
import Router from 'express';
import routesVersioning  from 'express-routes-versioning';
// import {userV1, userV11} from '../versiones/v1/user.js'
// import {userV2} from '../versiones/v2/user.js'
// import {userV3} from '../versiones/v3/user.js'
// //http://localhost:5010


const appIncidencias = Router();
const version = routesVersioning();
//Headers 'Authorization: Bearer ....'
//appIncidencias.use(limitUsuario(), passportHelper.authenticate('bearer', { session: false }));
//Headers 'Accept-Version: ~1.0.0' 



/**
 * @VERSION ~1.0.0 -> Lista todas las incidencias
 * @VERSION ~3.5.0-> Lista todas las incidencias de mayor a menor segun el nivel de gravedad 
 */


appIncidencias.get('/',  version({
    "~1.0.0": getAllIncidencias,
    "~3.5.0": getAllIncidenciasV3
}));

/**
 * @VERSION ~1.0.0 -> Lista todas las incidencias por id
 * @VERSION ~3.5.0-> Lista todas las incidencias por fecha
 */
appIncidencias.get('/:id', version({
     "~1.0.0": getIncidenciasById,
     "~3.5.0": getIncidenciasByDate
 }));

/**
 * @VERSION ~1.0.0 -> Inserta una inidencia pero se tiene que especificar el id que tendra y ademas se maneja la estructura de nombres que se usa en el backend
 * @VERSION ~3.5.0-> Inserta una inidencia, pero el id se agregara automaticamente ademas la estructura de datos de envio es diferente a la del backend dotando esta version de mayor seguridad
 */
appIncidencias.post('/', version({
    "~1.0.0": postNewIncidencia, 
    "~3.5.0": postNewIncidenciaV3
}));



export {
    appIncidencias
};