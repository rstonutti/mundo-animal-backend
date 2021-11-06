const { model, Schema } = require('mongoose');

const BusquedaSchema = new Schema({
    lon: {
        type: String,
    },
    lat: {
        type: String,
    }
});

module.exports = model('Busqueda', BusquedaSchema);