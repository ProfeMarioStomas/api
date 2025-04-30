import express from 'express';
import userRoute from './routes/user.route.js';
import libroRoute from './routes/libro.route.js';

const app = express();

app.use(express.json());

app.use('/usuarios', userRoute);
app.use('/libros', libroRoute);

app.get('/', (request, response) => {
    response.send("Llega petición a endpoint /");
});

app.get('/hola/:nombre/edad/:agno', (request, response) => {
    const nombreEntrada = request.params.nombre;
    const edadEntrada = request.params.agno;

    console.log("Llega petición al endpoint /hola");
    response.send(`Hola, ${nombreEntrada}. Tienes ${edadEntrada} años`);
});

app.get('/usuarios', (request, response) => {
    response.send("Llega petición al endpoint /usuarios");
});

app.get('/suma/:num1/y/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        var suma = num1 + num2;
        res.send(`La suma entre ${num1} y ${num2} es: ${suma}`);
    }
    else { 
        res.send(`La suma no puede ser porque uno no de los parametros es un DIGITO`);
    }
});

export default app;