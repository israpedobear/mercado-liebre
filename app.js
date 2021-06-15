//librerias nativas necesarias
const express = require('express'); 
const path = require('path');

//objeto servidor 
const app = express();

//determinar la carpeta de archivos staticos
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.set('port', process.env.PORT || 3000 );

//enrutamiento de endpoints y midellwares
//ruta a pagina principal
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

//entrar a index
app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

//ruta a crear cuenta
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

//ruta a iniciar sesion
app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

//configuracion de ruta de acceso al servidor 
//onst PORT = process.env.port  || 3030;

app.listen(app.get('port'),()=>{
    console.log(`El servidor se ha inicialiado..., puedes acceder a al mediante http://localhost:${app.get('port')} , para detener preciona Ctrl + C`);
    // console.log("El servidor se ha inicialiado..., puedes acceder a al mediante http://localhost:3030/, para detener preciona Ctrl + C");
});
