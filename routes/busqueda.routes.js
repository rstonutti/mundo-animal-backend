const router = require('express').Router();

const {
    obtenerTodo,
    obtener,
    registrar,
    editar,
    eliminar
} = require('../controllers/busqueda.controllers');

router.post('/registrar', registrar)

module.exports = router;