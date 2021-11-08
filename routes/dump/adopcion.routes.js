const router = require('express').Router();
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../../middlewares');

const {
    obtenerTodo,
    obtener,
    registrar,
    editar,
    eliminar
} = require('../controllers/adopcion.controllers.js');

const {
    existePublicacionID
} = require('../../helpers/validacionesDB.js');

router.get('/', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),


    validarCampos
], obtenerTodo);

router.get('/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),


    validarCampos
], obtener);

router.post('/registrar', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),

    validarCampos
], registrar);

router.put('/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),

    check('id').custom(existePublicacionID),
    validarCampos
], editar);

router.delete('/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),

    check('id').custom(existePublicacionID),
    validarCampos
], eliminar);

module.exports = router;