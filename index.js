require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//puerto
const puerto = process.env.PORT || 4000;
app.listen(puerto, console.log('Servidor en puerto: ', puerto));

////////////////////////////////////////////////

//configuracion handlebars
app.set('view engine', 'handlebars');
app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'main',
        layoutsDir: `${__dirname}/views/layouts`,
        partialsDir: `${__dirname}/views/partials`,
        extname: ".handlebars"
    })
);

///////////////////////////////////////////////

app.get('/', async (req, res) => {
    res.send('Luz, cámara, acción!!!');
});