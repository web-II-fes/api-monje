import {Schema, model} from 'mongoose';

const schemaCurso = new Schema({
    nombreCurso: String,
    profesor: String,
    anio: Number,
    estado: String
});

export let cursoSchema = model('curso', schemaCurso , 'cursos');