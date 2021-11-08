const { request, response } = require('express');
const { Publicacion } = require('../../models');

ctrlBusqueda = {};

ctrlBusqueda.obtenerTodo = async (req = request, res = response) => {

};

ctrlBusqueda.obtener = async (req = request, res = response) => {

};

ctrlBusqueda.registrar = async (req = request, res = response) => {
    const body = req.body;

    try {

        const publicacion = new Publicacion(body);

        publicacion.tipo = 'busqueda';

        publicacion.createdAt = Date.now();

        publicacion.autor = req.usuario._id;

        await publicacion.save();

        res.status(201).json({
            msg: 'Publicación creada con éxito',
            publicacion
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor hablé con el administrador',
        });
    }

};

ctrlBusqueda.editar = async (req = request, res = response) => {

};

ctrlBusqueda.eliminar = async (req = request, res = response) => {

};

module.exports = ctrlBusqueda;