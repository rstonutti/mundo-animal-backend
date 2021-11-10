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
} = require('../controllers/publicacion.controllers');

const {
    existePublicacionID,
    existeTipo
} = require('../helpers/validacionesDB.js');

router.get('/:tipo/listar', [

    check('tipo').custom(existeTipo),
    validarCampos
], obtenerTodo);

router.get('/:tipo/:id', [
    

    check('id', 'No es un ID válido').isMongoId(),

    validarCampos
], obtener);

router.post('/:tipo/registrar', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),

    check('tipo').custom(existeTipo),

    validarCampos
], registrar);

router.put('/:tipo/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),

    check('tipo').custom(existeTipo),


    check('id').custom(existePublicacionID),
    validarCampos
], editar);

router.delete('/:tipo/:id', [
    validarJWT,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),

    check('tipo').custom(existeTipo),

    check('id').custom(existePublicacionID),
    validarCampos
], eliminar);

module.exports = router;