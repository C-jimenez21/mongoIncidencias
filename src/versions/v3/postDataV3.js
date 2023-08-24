import { genCollection, getNewId, searchCallback } from "../../helpers/db.js";

/**
 * 
 * @param postNewIncidenciaV3 -> permite crear un nuevo trainer pero sin usar los mismos datos del backend y sin especificar el id
 */


const postNewIncidenciaV3 = async(req, res) => {
    const { NIVEL_INICIDENCIA: inciLevel, CATEGORIA_INICIDENCIA: inciCat, FECHA_INCIDENCIA: inciDat, LUGAR_INCIDENCIA: inciPlace, DESCRIPCION: inciDes } = req.body;
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


const postNewTrainerV3 = async(req, res) => {
    const { TRAINER_NAME: name, PERSONAL_EMAIL: email, CORPORATIVO_EMAIL: eCorp, MOVIL_PHONE: tMovil, RESIDENCIA_PHONE: tRes, EMPRESA_PHONE: tEmp, MOVIL_EMPRESA_PHONE: tEmpMov } = req.body;
        let schema = {
            "_id": await getNewId("trainer"),
            "nombre_completo": name,
            "email_personal": email,
            "email_corporativo": eCorp,
            "telefono_movil": tMovil,
            "telefono_residencia": tRes,
            "telefono_empresa": tEmp,
            "telefono_movil_empresarial": tEmpMov
        }
        let col = await genCollection("trainer");
        let result = await col.insertOne(schema);
        res.send(result);    
  
    }

export {
    postNewIncidenciaV3,
    postNewTrainerV3
    
}
