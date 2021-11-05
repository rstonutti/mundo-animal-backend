const { model, Schema } = require('mongoose');

const MascotaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de usuario es necesario']
    }
});

module.exports = model('Mascota', MascotaSchema);