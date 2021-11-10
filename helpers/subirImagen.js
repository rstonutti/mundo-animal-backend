const path = require('path');
const { v4: uuidv4 } = require('uuid');

const subirImagen = (files, carpeta = '', extensionesValidas = ['png', 'jpg', 'jpeg', 'gif']) => {

    return new Promise((resolve, reject) => {

        const { imagen } = files;
        const nombreCortado = imagen.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];

        //validar extensión

        if (!extensionesValidas.includes(extension)) {
            return reject(`La extensión ${extension} no está permitida - Extensiones permitidas ${extensionesValidas}`)
        };

        const nombreTemp = uuidv4() + '.' + extension;

        const uploadPath = path.join(__dirname, '../uploads', carpeta, nombreTemp);

        imagen.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            };
            resolve(uploadPath);
        });

    });
};

module.exports = {
    subirImagen
}