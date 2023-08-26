import { genCollection, searchCallback} from "../../helpers/db.js";


/**
 * 
 * ? postea un nueva incidencia pero se debe agregar el id y se manejan mismo formateo de valores del backend en el bod
 */


const postNewIncidencia = async(req, res) => {
   try {
    console.log({"req.body": req.body});
    const {id, categoria, nivel, fecha, lugar_incidencia, descripcion} = req.body
    
    let validacion = await searchCallback("reporte", "_id", id);
    if (!validacion) {
    let schema = {
        "_id": Number(id),
        "usu_incidencia":{
            "nivel": Number(nivel),
            "categoria": categoria,
        },
        "fecha": new Date(fecha),
        "lugar_incidencia": lugar_incidencia,
        "descripcion": descripcion
    }
    let col = await genCollection("reporte");
    let result = await col.insertOne(schema);
    res.send(result);
}else{
    res.status(400).send("Este id ya se encuentra registrado en la base de datos");
}
   
   } catch (error) {
    console.log(error.errInfo.details.schemaRulesNotSatisfied.propertiesNotSatisfied);
   }
}


export {
    postNewIncidencia
}

