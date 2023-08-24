import { genCollection, getNewId } from '../../helpers/db.js'

let col = await genCollection("reporte");


const getAllIncidencias = async(req,res) =>{
    try {
        console.log("entre v1");
    let result = await col.find().toArray();
    (result.length === 0) ? res.status(404).send("No existen incidencias hasta el momento"):res.status(200).send(result)
   } catch (error) {
    console.log(error);
   }
}

const getIncidenciasById = async(req,res) =>{
    try {
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
    getIncidenciasById
}