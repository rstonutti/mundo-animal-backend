const { request, response } = require('express');
const { Publicacion } = require('../models');

ctrlAdopcion = {};

ctrlAdopcion.obtenerTodo = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true }
    try {
        const [total, publicaciones] = await Promise.all([
            Publicacion.countDocuments(query),
            Publicacion.find(query)
                .populate('autor', 'nombre')
                .skip(Number(desde))
                .limit(Number(limite))
        ]);
    } catch (error) {
        console.log(error);
    }
};

ctrlAdopcion.obtener = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const publicacion = await Publicacion.findById(id).populate('autor', 'nombre');
        res.json({
            publicacion
        });
    } catch (error) {
        console.log('Error al mostrar los datos del estudiante: ', error);
    }
};

ctrlAdopcion.registrar = async (req = request, res = response) => {
    const body = req.body;

    try {
        const publicacion = new Publicacion(body);

        publicacion.tipo = 'adopcion';

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

ctrlAdopcion.editar = async (req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;

    try {
        const inactivo = await Publicacion.findById(id);

        if (!inactivo.estado) {
            return res.json({
                msg: `La publicación ${id} no existe`
            });
        };

        body.usuario = req.usuario._id;

        const publicacion = await Publicacion.findByIdAndUpdate(id, body, { new: true })
        res.json({
            msg: "Datos de la publicacion actualizados exitosamente",
            publicacion
        });
    } catch (error) {
        console.log(error);
    }
};

ctrlAdopcion.eliminar = async (req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;

    try {

    } catch (error) {
        console.log(error);
    }
};

module.exports = ctrlAdopcion;