const { request, response } = require('express');
const { Busqueda, Mascota, Publicacion } = require('../models');

ctrlBusqueda = {};

ctrlBusqueda.obtenerTodo = async (req = request, res = response) => {

};

ctrlBusqueda.obtener = async (req = request, res = response) => {

};

ctrlBusqueda.registrar = async (req = request, res = response) => {
    const [publicacionInfo, busquedaInfo] = req.body;

    try {
        
        const busqueda = new Busqueda(busquedaInfo);

        const publicacion = new Publicacion(publicacionInfo);
        
        publicacion.modelo = 'Busqueda';
        
        publicacion.tipo = busqueda._id;
        
        //publicacion.autor = req.usuario._id;

        await Promise.all([
            publicacion.save(),
            busqueda.save()
        ]);

        res.status(201).json({
            msg: 'Publicación creada con éxito',
            publicacion
        });

    } catch (error) {
        console.log(error);
    }

};

ctrlBusqueda.editar = async (req = request, res = response) => {

};

ctrlBusqueda.eliminar = async (req = request, res = response) => {

};

module.exports = ctrlBusqueda;