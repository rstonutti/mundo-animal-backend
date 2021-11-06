const { request, response } = require('express');
const { Adopcion, Mascota, Publicacion } = require('../models');

ctrlAdopcion = {};

ctrlAdopcion.obtenerTodo = async (req = request, res = response) => {

};

ctrlAdopcion.obtener = async (req = request, res = response) => {

};

ctrlAdopcion.registrar = async (req = request, res = response) => {
    const [publicacionInfo, adopcionInfo] = req.body;

    try {
        
        const adopcion = new Adopcion(adopcionInfo);

        const publicacion = new Publicacion(publicacionInfo);
        
        publicacion.modelo = 'Adopcione';
        
        publicacion.tipo = adopcion._id;
        
        //publicacion.autor = req.usuario._id;

        await Promise.all([publicacion.save(),
            adopcion.save()]);

        res.status(201).json({
            msg: 'Publicación creada con éxito',
            publicacion
        });

    } catch (error) {
        console.log(error);
    }

};

ctrlAdopcion.editar = async (req = request, res = response) => {

};

ctrlAdopcion.eliminar = async (req = request, res = response) => {

};

module.exports = ctrlAdopcion;