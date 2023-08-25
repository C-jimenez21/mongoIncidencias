import { genCollection, getNewId, searchCallback } from "../../helpers/db.js";

/**
 * 
 * @param postNewIncidenciaV3 -> permite crear una nueva incidencia pero sin usar los mismos datos del backend y sin especificar el id
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


/**
 * 
 * @param postNewTrainerV3 -> permite crear un nuevo trainer pero sin usar los mismos datos del backend y sin especificar el id
 */



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

    const postNewComputerV3 = async(req, res) => {
        const { AREA: area, ROOM: sala, PC_CODE: codigo, PC_KEYBOARD: teclado, PC_MOUSE: raton, PC_HEADPHONES: audifonos } = req.body;
            let schema = {
                "salon_area":area,
                "salon_nombre":sala,
                "ordenadores":[
                    {
                        "ordenador_codigo": codigo,
                        "ordenador_codigo_teclado": teclado,
                        "ordenador_codigo_mouse": raton,
                        "ordenador_codigo_diadema": audifonos
                    }
                ]
            }
            let col = await genCollection("salon");
            let result = await col.updateOne(
                { "salon_nombre": sala }, 
                {
                  $push: {
                    ordenadores: schema
                  }
                }
              );
            res.send(result);    
      
        }




export {
    postNewIncidenciaV3,
    postNewTrainerV3,
    postNewComputerV3
    
}
