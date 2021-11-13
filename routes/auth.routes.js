const router = require('express').Router();
const { check } = require('express-validator');

const { login,
    googleSignIn,
    revalidarToken } = require('../controllers/auth.controllers');

    const { validarJWT } = require('../middlewares/validarJWT');

router.post('/login', login);

router.post('/google', [
    check('id_token', 'El id_token es necesario').not().isEmpty(),
], googleSignIn);

router.get('/renew', [validarJWT],revalidarToken);

module.exports = router;