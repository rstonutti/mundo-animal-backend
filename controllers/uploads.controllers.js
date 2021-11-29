//Under construction
const { request, response } = require('express');
const { subirImagen } = require('../helpers');

const { v4: uuidv4 } = require('uuid');

const cloudinary = require('cloudinary').v2;

cloudinary.config(process.env.CLOUDINARY_URL)

const ctrlImagen = {};

ctrlImagen.subir = async (req = request, res = response) => {

    const { tempFilePath } = req.files.imagen;
    
    const nombre = uuidv4();

    console.log(nombre);
    try {


        const { secure_url, public_id } = await cloudinary.uploader.upload(tempFilePath, 
            {resource_type: "image", public_id: `mundo_animal/${nombre}`},
            function(error, result) {
                error && console.log(error)});

        //const nombre = await subirImagen(req.files, 'img', undefined);



        res.json({
            secure_url,
            public_id
        });

    } catch (msg) {
        res.status(400).json({
            msg
        });
    };

};

module.exports = ctrlImagen;