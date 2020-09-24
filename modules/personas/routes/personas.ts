import * as express from 'express';
import {personaSchema} from './../schemas/personas';

const router = express.Router();

router.get('/persona', (req, res, next) => {
personaSchema.find(function(err, persona) {
		if (err) return;

		res.send(persona);
	});
});


router.post('/persona', (req, res)=> {
    console.log('viene persona Post: ', req.body);
    const persona = new personaSchema(req.body);

    persona.save(function(err, persona) {
        if (err) {
            console.log('Error: ', err);
        }
        res.json(persona);
    });
});


router.put('/persona/:_id', (req, res) => {
    // console.log('Viene del PUT', req.params._id);
    personaSchema.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, persona) => {
        if (err) {
            return err;
        }
        return res.send(persona);
    });
});

router.delete('/persona/:_id', (req, res, next) =>{
    console.log('Viene del DELETE', req.params._id);
    personaSchema.findByIdAndRemove(req.params._id, function(err, persona) {
    if(err){
        console.log("Error", err);
    }
    console.log("Borrado: ", persona);
    res.json(persona);
});
});




export = router;