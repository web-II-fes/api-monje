import * as express from 'express';
import {personaSchema} from './../schemas/personas';

const router = express.Router();

router.get('/persona',  async (req, res) => {
    try{
        let personas = await personaSchema.find()
         res.send(personas);
    }catch(err){
        throw err;
    }

});

router.post('/persona', async (req, res)=> {

    try{
        const persona = new personaSchema(req.body);
        await persona.save();

        res.send(persona);
    }catch(err){
        throw err;
    }
});

router.get('/personaId/:id',  async (req, res) => {
    let IdPersona = req.params.id;
        try{
            let perosnas = await personaSchema.findById(IdPersona);
             res.send(perosnas);
        }catch(err){
            throw err;
        }
    
});  

router.put('/persona/:_id', async (req, res) => {
    try{
         let persona = await personaSchema.findByIdAndUpdate(req.params._id, req.body);
         res.send(persona);
     } catch (err){
         throw err;
     } 
});

router.delete('/persona/:_id', async (req, res, next) =>{
   let persona = await personaSchema.findByIdAndRemove(req.params._id, function(err, curso) {
    if(err){
        console.log("Error", err);
    }
    console.log("Borrado: ", persona);
    res.json(persona);
});
}); 




export = router;