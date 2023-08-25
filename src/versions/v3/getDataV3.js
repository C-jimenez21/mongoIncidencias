import { genCollection, getNewId } from '../../helpers/db.js'



/**
 * 
 * @param getAllIncidenciasV3 -> En lista todas las incidencias por nivel de criticidad 
 */

const getAllIncidenciasV3 = async(req,res) =>{
    try {
        console.log("entre v3");
    let col = await genCollection("reporte");
    let result = await col.find().sort({"usu_incidencia.nivel": -1}).toArray();
    (result.length === 0) ? res.status(404).send("No existen incidencias v2 hasta el momento"):res.status(200).send(result)
   } catch (error) {
    console.log(error);
   }
}

/**
 * 
 * @param getIncidenciasByDate -> En lista todas las incidencias por fecha especifica 
 */

const getIncidenciasByDate = async(req,res) =>{
    try {
    console.log("entre v3");
    const { id: dates } = req.params
    let col = await genCollection("reporte");
    let result = await col.findOne({ "fecha": new Date(dates) });
    if(!result){res.send(`No existen incidencias para la fecha: ${dates} `)
    }else{res.send(result)}
   } catch (error) {
    console.log(error);
   }
}



/**
 * 
 * @param getAllTrainersV3 -> En lista todas los trainer por orden de alfabetico y formatea la salida de datos 
 */

const getAllTrainersV3 = async(req,res) =>{
    try {
    console.log("entre v3");
    let col = await genCollection("trainer");
    let result = await col.aggregate([
        {
            $sort: {
                nombre_completo: 1
            }
        },
        {
            $project: {
                IDENTIDICACION: "$_id",
                NOMBRE_TRAINER: "$nombre_completo",
                EMAIL_TRAINER:{PERSONAL:"$email_personal", CORPORATIVO:"$email_corporativo"},
                TELEFONO_TRAINER: { MOVIL: "$telefono_movil", RESIDENCIA:"$telefono_residencia", EMPRESA: "$telefono_empresa", MOVIL_EMPRESA:"$telefono_movil_empresarial"}
            }
        }
    ]).toArray();
    (result.length === 0) ? res.status(404).send("No existen trainers hasta el momento"):res.status(200).send(result)
   } catch (error) {
    console.log(error);
   }
}




/**
 * 
 * @param getAllRoomsV3 -> En lista todas los trainer por orden de alfabetico y formatea la salida de datos 
 */

const getAllRoomsV3 = async(req,res) =>{
    try {
    console.log("entre v3");
    let col = await genCollection("salon");
    let result = await col.aggregate([
        {
            $sort: {
                salon_area: 1
            }
        },
        {
            $project: {
                "_id": 0,
                IDENTIDICACION: "$_id",
                SALON_AREA: "$nombre_completo",
                SALON_NOMBRE:"$salon_nombre",
                COMPUTADORES: "$ordenadores"
            }
        }
    ]).toArray();
    (result.length === 0) ? res.status(404).send("No existen trainers hasta el momento"):res.status(200).send(result)
   } catch (error) {
    console.log(error);
   }
}




export {
    getAllIncidenciasV3,
    getIncidenciasByDate,
    getAllTrainersV3,
    getAllRoomsV3
}