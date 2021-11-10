//Under construction

const router = require('express').Router();

const {subir} = require('../controllers/uploads.controllers');
const { validarImagen } = require('../middlewares');

router.post('/uploads', [
    validarImagen
], subir);

module.exports = router;