import { genCollection, getNewId } from '../../helpers/db.js'


/**
 * ? Lista todas las incidencias 
 */


const getAllIncidencias = async(req,res) =>{
    try {
        let col = await genCollection("reporte");
        console.log("entre v1");
    let result = await col.find().toArray();
    (result.length === 0) ? res.status(404).send("No existen incidencias hasta el momento"):res.status(200).send(result)
   } catch (error) {
    console.log(error);
   }
}

/**
 * ? Lista todas las incidencias por id
 */

const getIncidenciasById = async(req,res) =>{
    try {
        let col = await genCollection("reporte");

    console.log("entre v1");
    const { id } = req.params
    let result = await col.findOne({ "_id": Number(id) });
    if(!result){res.send(`No existen incidencias con el id: ${id} `)
    }else{res.send(result)}
   } catch (error) {
    console.log(error);
   }
}

/**
 * ? Lista todos las trainers 
 */


const getAllTrainers = async(req,res) =>{
    try {
        let col = await genCollection("trainer");
        console.log("entre v1");
    let result = await col.find().toArray();
    (result.length === 0) ? res.status(404).send("No trainers incidencias hasta el momento"):res.status(200).send(result)
   } catch (error) {
    console.log(error);
   }
}

/**
 * ? Lista todos los trainers por id 
 */

const getTrainersById = async(req,res) =>{
    try {
        let col = await genCollection("trainer");

    console.log("entre v1");
    const { id } = req.params
    let result = await col.findOne({ "_id": Number(id) });
    if(!result){res.send(`No existen incidencias con el id: ${id} `)
    }else{res.send(result)}
   } catch (error) {
    console.log(error);
   }
}


export {
    getAllIncidencias,
    getIncidenciasById,
    getAllTrainers,
    getTrainersById
}