const path = require('path');

const { request, response } = require('express');
const { Publicacion } = require('../models');

ctrlPublicacion = {};

ctrlPublicacion.obtenerTodo = async (req = request, res = response) => {
    const { tipo } = req.params;
    const { limite = 5, desde = 0 } = req.query;
    const query = { tipo, estado: true };

    console.log(1,desde);
    console.log(2,limite);

    try {
        const [total, publicaciones] = await Promise.all([
            Publicacion.countDocuments(query),
            Publicacion.find(query)
                .populate('autor', 'nombre')
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        res.status(200).json({
            total,
            publicaciones
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor hable con el administrador'
        });
    };
};

ctrlPublicacion.obtener = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const publicacion = await Publicacion.findById(id).populate('autor', 'nombre');
        res.status(200).json({
            publicacion
        });
    } catch (error) {
        console.log('Error al mostrar las publicaciones: ', error);
        res.status(500).json({
            msg: 'Por favor hable con el administrador'
        });
    }
};

ctrlPublicacion.registrar = async (req = request, res = response) => {
    const { tipo } = req.params;
    const body = req.body;

    try {

/*         if(!req.files || Object.keys(req.files).length === 0 || !req.files.imagen){
            res.status(400).json({
                msg: 'No hay imagenes que subir'
            });
            return;
        }

        const {imagen} = req.files;

        const uploadPath = path.join(__dirname + '../uploads', imagen.name);

        imagen.mv(uploadPath, (err) => {
            if(err){
                return res.status(500).json({err});
            };

            res.json({
                msg: 'El archivo se subió'
            })
        }); */





        const publicacion = new Publicacion(body);

        publicacion.tipo = tipo;

        publicacion.autor = req.usuario._id;
        
        publicacion.createdAt = Date.now();
        
        await publicacion.save();

        res.status(201).json({
            msg: 'La publicación fue creada con éxito',
            publicacion
        });

    } catch (error) {
        console.log('Error al registrar la publicación', error);
        res.status(500).json({
            msg: 'Por favor hable con el administrador'
        });
    }

};

ctrlPublicacion.editar = async (req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;

    try {
        const inactivo = await Publicacion.findById(id);

        if (!inactivo.estado) {
            return res.json({
                msg: `La publicación con ${id} no existe`
            });
        };

        //body.usuario = req.usuario._id;

        const publicacion = await Publicacion.findByIdAndUpdate(id, body, { new: true });

        res.status(200).json({
            msg: "Los datos de la publicación actualizados exitosamente",
            publicacion
        });
    } catch (error) {
        console.log('Error al editar la publicación', error);
        res.status(500).json({
            msg: 'Por favor hable con el administrador'
        });
    }
};

ctrlPublicacion.eliminar = async (req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;

    try {

        const publicacion = await Publicacion.findByIdAndUpdate(id, body, { new: true });

        res.status(200).json({
            msg: 'La publicación fue elimnada con éxito',
            publicacion
        })

    } catch (error) {
        console.log('Error al eliminar la publicación', error);
        res.status(500).json({
            msg: 'Por favor hable con el administrador'
        });
    }
};

module.exports = ctrlPublicacion;