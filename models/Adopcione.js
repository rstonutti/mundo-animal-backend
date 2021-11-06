const { model, Schema } = require('mongoose');

const AdopcioneSchema = new Schema({
    castrado: {
        type: Boolean,
        required: true
    },
    vacunado: {
        type: Boolean,
        required: true
    },
    desparacitado: {
        type: Boolean,
        required: true
    }
});

module.exports = model('Adopcione', AdopcioneSchema);