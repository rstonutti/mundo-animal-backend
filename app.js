const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

require('./database/connection.js');

const app = express();

//Directorio público
app.use( express.static('public') );

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

//Settings
(app.set('port', process.env.PORT || 8080));

//Routes
app.use('/auth', require('./routes/auth.routes'));
app.use('/usuario', require('./routes/usuario.routes'));
//app.use('/adopcion', require('./routes/adopcion.routes'));
//app.use('/busqueda', require('./routes/busqueda.routes'));
app.use('/', require('./routes/publicacion.routes'));
 
app.listen(app.get('port'), () => console.log(`Servidor corriendo en el puerto ${app.get('port')}`));