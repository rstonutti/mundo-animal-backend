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
    }
});

const PublicacioneSchema = new Schema({
    //mascota: MascotaSchema,
    imagen: {
        type: String,
        required: [true, 'La imagen de la publicación es necesaria']
    },
    tipo: {
        type: Schema.Types.ObjectId,
        required: [true, 'El tipo de publicación es necesaria'],
        refPath: 'modelo'
    },
    modelo: {
        type: String,
        required: [true, 'Especificar el modelo es requerido'],
        enum: ['Adopcione', 'Busqueda']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción de la publicación es necesaria']
    },
    telefono: {
        type: String,
        required: [true, 'El número de contacto es requerido'],
    },
    /* autor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }, */
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        default: 'not updated'
    }
});

module.exports = model('Publicacione', PublicacioneSchema);