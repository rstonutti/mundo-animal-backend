const router = require('express').Router();
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const {
    obtenerTodo,
    obtener,
    registrar,
    editar,
    eliminar
} = require('../controllers/adopcion.controllers');

const {
    existeRol,
    existePublicacionID
} = require('../helpers/validacionesDB.js');

router.get('/', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),


    check('rol').custom(existeRol),
    validarCampos
], obtenerTodo);

router.get('/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),


    check('rol').custom(existeRol),
    validarCampos
], obtener);

router.post('/registrar', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),


    check('rol').custom(existeRol),
    validarCampos
], registrar);

router.put('/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),


    check('id').custom( existePublicacionID ),
    check('rol').custom(existeRol),
    validarCampos
], editar);

router.delete('/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),


    check('id').custom( existePublicacionID ),
    check('rol').custom(existeRol),
    validarCampos
], eliminar);

module.exports = router;