const { model, Schema } = require('mongoose');

const {
    pet_caracter,
    pet_especie,
    pet_genero,
    pet_tamanio
} = require('./Caracteristicas');

const MascotaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la mascota es necesario']
    },
    nacimiento: {
        type: String
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
    mascota: MascotaSchema,
    imagen: {
        type: String,
        required: [true, 'La imagen de la publicación es necesaria']
    },
    tipo: {
        type: String,
        required: [true, 'Especificar el tipo es requerido'],
        enum: ['adopcion', 'busqueda']
    },
    detalle: {},
    descripcion: {
        type: String,
        required: [true, 'La descripción de la publicación es necesaria']
    },
    telefono: {
        type: String,
        required: [true, 'El número de contacto es requerido'],
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: String,
        default: 'not updated'
    }
});

module.exports = model('Publicacione', PublicacioneSchema);