const { model, Schema } = require('mongoose');

const PerdidoSchema = new Schema({
    rol: {
        type: String,
        required: [true, 'El rol del usuario es necesario']
    },
});

module.exports = model('Perdido', PerdidoSchema);