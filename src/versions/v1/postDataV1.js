import { genCollection, searchCallback} from "../../helpers/db.js";


const postNewIncidencia = async(req, res) => {
    const {id, categoria, nivel, fecha, lugar_incidencia, descripcion} = req.body
    let validacion = await searchCallback("reporte", "_id", id);
    if (!validacion) {
    let schema = {
        "_id": Number(id),
        "usu_incidencia":{
            "nivel": nivel,
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
}



export {
    postNewIncidencia
}

/*
 {
        _id: Number(siguienteId("reporte")),
        usu_incidencia: {
            nivel: 2,
            categoria: "leve"
        },
        fecha: ISODate("2023-08-20"),
        lugar_incidencia: "Oficina A",
        descripcion: "Reporte de incidente menor en la oficina."
    }
*/