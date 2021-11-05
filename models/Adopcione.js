const { model, Schema } = require('mongoose');

const AdopcioneSchema = new Schema({
    rol: {
        type: String,
        required: [true, 'El rol del usuario es necesario']
    },
});

module.exports = model('Adopcione', AdopcioneSchema);