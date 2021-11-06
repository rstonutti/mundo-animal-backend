const { model, Schema } = require('mongoose');

const PublicacioneSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'EL título de la publicación es necesario']
    },
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
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
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