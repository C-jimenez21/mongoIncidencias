import { genCollection, searchCallback} from "../../helpers/db.js";


/**
 * 
 * ? postea un nueva incidencia pero se debe agregar el id y se manejan mismo formateo de valores del backend en el bod
 */


const deleteAnyoneById = async(req, res) => {
    const {id} = req.params
    const { baseUrl} = req
    const url = baseUrl.split("/")[1]
    console.log({"url": url});
    let validacion = await searchCallback(url, "_id", Number(id));
    console.log({"variables": url, id});
    if (validacion) {
    let col = await genCollection(url);
    let result = await col.deleteOne({"_id": Number(id)});
    res.send(result);
}else{
    res.status(400).send("Este id no se encuentra registrado en la base de datos");
}
}



export {
    deleteAnyoneById
}

