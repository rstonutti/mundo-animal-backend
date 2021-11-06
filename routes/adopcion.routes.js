const router = require('express').Router();

const {
    obtenerTodo,
    obtener,
    registrar,
    editar,
    eliminar
} = require('../controllers/adopcion.controllers');

router.post('/registrar', registrar)

module.exports = router;