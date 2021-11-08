const { model, Schema } = require('mongoose');

const TipoSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
});

module.exports = model('Tipo', TipoSchema);