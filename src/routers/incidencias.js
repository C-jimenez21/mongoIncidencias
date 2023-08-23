import { getAllIncidencias } from '../v1/getData.js'

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
//Headers 'Accept-Version: 1.0.0' 
appIncidencias.get('/',  version({
    "^1.0.0": userV1,
    "~2.2.1": userV2,
    "3.5.0": userV3
}));
appIncidencias.get('/:id', version({
    "^1.1.1": userV11,
}));
export {
    appIncidencias
};