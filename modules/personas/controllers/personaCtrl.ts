import { resolve } from "path";
import { rejects } from "assert";
import { personaSchema } from "../schemas/personas";

export function getMayores(personas){
    return new Promise ((resolve, reject) => {
        let arrPersonas = personas.filter(persona => persona.edad > 40 );
    });
}


export async function getMenores(personas){
    let arrPersonas = personas.filter(persona => persona.edad > 40 );

    if (arrPersonas.length){
        
    }


}