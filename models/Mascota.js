const { model, Schema } = require('mongoose');

const {
    pet_caracter,
    pet_especie,
    pet_genero,
    pet_tamanio
} = require('./Caracteristica');

const MascotaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la mascota es necesario']
    },
    nacimiento: {
        type: Date  
    },
    especie: {
        type: String,
        enum: pet_especie,
        required: [true, 'La especie de la mascota es necesaria']
    },
    raza: {
        type: String,
        required: [true, 'La raza de la mascota es requerida']
    },
    genero: {
        type: String,
        enum: pet_genero,
        required: [true, 'El género de la mascota es requerida']
    },
    tamanio: {
        type: String,
        enum: pet_tamanio,
        required: [true, 'El tamaño de la mascota es necesario']
    },
    color: {
        type: String,
        required: [true, 'El color de la mascota es requerida']
    },
    personalidad: {
        type: String,
        enum: pet_caracter,
        required: [true, 'El carácter de la mascota es necesario']
    },
    detalle: {
        type: String
    }
});

module.exports = model('Mascota', MascotaSchema);