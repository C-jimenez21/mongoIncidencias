import { genCollection, getNewId } from '../../helpers/db.js'



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





export {
    getAllIncidenciasV3,
    getIncidenciasByDate
}