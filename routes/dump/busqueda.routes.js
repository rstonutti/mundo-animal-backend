const router = require('express').Router();
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    adminRole,
    tieneRole
} = require('../../middlewares');

const {
    obtenerTodo,
    obtener,
    registrar,
    editar,
    eliminar
} = require('../controllers/busqueda.controllers');

router.post('/registrar', [
    validarJWT,
    validarCampos
], registrar)

module.exports = router;