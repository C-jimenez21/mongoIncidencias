import { genCollection, getNewId } from '../../helpers/db.js'



const getAllIncidencias = async(req,res) =>{
    let col = await genCollection("usuaro_reporte");
    let result = await col.find().toArray();
    if(result.length === 0){res.status(404).send("No existen incidencias hasta el momento")}
}






export {
    getAllIncidencias
}