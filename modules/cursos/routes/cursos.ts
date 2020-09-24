import * as express from 'express';
import { cursoSchema } from '../schemas/cursos';

const router = express.Router();

router.get('/curso',  async (req, res) => {

    try{
        let cursos = await cursoSchema.find()
         res.send(cursos);
    }catch(err){
        throw err;
    }

    });

router.get('/cursoId/:id',  async (req, res) => {
    let IdCurso = req.params.id;
        try{
            let cursos = await cursoSchema.findById(IdCurso);
             res.send(cursos);
        }catch(err){
            throw err;
        }
    
});   


router.post('/curso', async (req, res)=> {

   
    try{
        const curso = new cursoSchema(req.body);
        await curso.save();

        res.send(curso);
    }catch(err){
        throw err;
    }

    });

router.put('/curso/:_id', async (req, res) => {
   try{
        let curso = await cursoSchema.findByIdAndUpdate(req.params._id, req.body);
        res.send(curso);
    } catch (err){
        throw err;
    } 
});
    
    router.delete('/curso/:_id', async (req, res, next) =>{
        // console.log('Viene del DELETE', req.params._id);
       let cursos = await cursoSchema.findByIdAndRemove(req.params._id, function(err, curso) {
        if(err){
            console.log("Error", err);
        }
        console.log("Borrado: ", curso);
        res.json(curso);
    });
    });    
      


export = router;