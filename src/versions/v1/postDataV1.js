import { genCollection, getNewId } from "../../helpers/db.js";


const postNewIncidencia = async(req, res) => {
    const { NIVEL_INICIDENCIA: inciLevel, CATEGORIA_INICIDENCIA: inciCat, FECHA_INCIDENCIA: inciDat, LUGAR_INCIDENCIA: inciPlace, DESCRIPCION: inciDes } = req.body
    let schema = {
        "_id": await getNewId("reporte"),
        "usu_incidencia":{
            "nivel": inciLevel,
            "categoria": inciCat,
        },
        "fecha": new Date(inciDat),
        "lugar_incidencia": inciPlace,
        "descripcion": inciDes
    }
    let col = await genCollection("reporte");
    let result = await col.insertOne(schema);
    res.send(result);
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