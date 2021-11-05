const router = require('express').Router();

const { check } = require('express-validator');

const {
  obtenerUsuario,
  crearUsuario,
  editarUsuario,
  borrarUsuario
} = require('../controllers/usuario.controllers');

const {
  existeCorreo,
  existeNombre,
  existeRol,
  existeUsuarioID
} = require('../helpers/validacionDB');

const {
  validarCampos,
  validarJWT,
  adminRole,
  tieneRole
} = require('../middlewares');

router.get('/:id', [
  validarJWT,
  tieneRole('admin_role', 'collaboration_role', 'user_role'),
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioID),
  validarCampos
], obtenerUsuario);

router.post('/', [
  check('nombre', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
  check('nombre', 'El nombre de usuario debe tener como minimo 8 caracteres').isLength({ min: 8 }),
  check('nombre').custom(existeNombre),
  check('contrasenia', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
  check('contrasenia', 'El nombre de usuario debe tener como minimo 8 caracteres').isLength({ min: 8 }),
  check('correo', 'El correo no es válido').isEmail(),
  check('correo').custom(existeCorreo),
  validarCampos
], crearUsuario);

router.put('/:id', [
  validarJWT,
  adminRole,
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioID),
  check('nombre', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
  check('nombre', 'El nombre de usuario debe tener como minimo 8 caracteres').isLength({ min: 8 }),
  check('contrasenia', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
  check('contrasenia', 'El nombre de usuario debe tener como minimo 8 caracteres').isLength({ min: 8 }),
  check('correo', 'El correo no es válido').isEmail(),
  check('rol').custom(existeRol),
  check('estado', 'El estado no es válido').isBoolean(),
  validarCampos
], editarUsuario);

router.delete('/:id', [
  validarJWT,
  adminRole,
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioID),
  validarCampos
], borrarUsuario)

module.exports = router;