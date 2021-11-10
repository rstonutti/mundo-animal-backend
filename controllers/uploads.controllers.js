//Under construction
const { request, response } = require('express');
const { subirImagen } = require('../helpers');

const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL)

const ctrlImagen = {};

ctrlImagen.subir = async (req = request, res = response) => {

    const { tempFilePath } = req.files.imagen;

    try {

        const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

        //const nombre = await subirImagen(req.files, 'img', undefined);



        res.json({
            secure_url
        });

    } catch (msg) {
        res.status(400).json({
            msg
        });
    };

};

module.exports = ctrlImagen;