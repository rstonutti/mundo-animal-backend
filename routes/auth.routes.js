const router = require('express').Router();

const { login,
        revalidarToken } = require('../controllers/auth.controllers');

router.post('/login', login);

router.get('/renew', revalidarToken)

module.exports = router;