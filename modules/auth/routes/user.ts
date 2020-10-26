import * as express from 'express';
import { login, registro } from '../controllers/authController';
import { userSchema } from './../schemas/user';
import {verifyToken} from './../middlewares/authJwt';

const router = express.Router(); 

router.post('/registro', async (req, res)=>{
    console.log('Entra a registro: ', req.body);
    try{
        let newRegistro = await registro(req.body);
    }catch(err){
        throw err;
    }

});

router.post('/login', async (req, res)=>{
    console.log('entra a login: ',req.body);
try{
    let token = await login(req.body);

    res.send({
        mensaje: 'Login existoso',
        token: token
    });

}catch(err){
    res.send({
        error: err 
    });
    
}
    
});



export = router