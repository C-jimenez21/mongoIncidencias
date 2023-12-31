import  {con}  from '../config/atlas.js';

const genCollection = async (coleccion) => {
    try {
        let db = await con();
        let newCollection = db.collection(coleccion)
        return newCollection;
        
    } catch (error) {
        console.log(error);
    }
}

 async function getNewId(coleccion) {
        try {
            const countersCollection = await genCollection("counters");
            const counterDoc = await countersCollection.findOneAndUpdate(
                { _id: `${coleccion}Id` },
                { $inc: { sequence_value: 1 } },
                { returnOriginal: false, upsert: true }
            );
            const newId = Number(counterDoc.value.sequence_value + 1);
            return newId;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

async function searchCallback(colleccion, item, contenido){
    try {
        
        let newCollection = await genCollection(colleccion);
        let result = await newCollection.findOne({ [item] : contenido});
        return result
    } catch (error) {
        console.log(error);
    }
}





    export {
        genCollection,
        getNewId,
        searchCallback
    }
    
    
    