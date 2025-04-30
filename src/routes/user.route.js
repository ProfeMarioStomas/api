import { Router } from 'express';

const router = Router();

let usuarios = [];

router.get('/', (req, res) => {
    console.log('Devolvemos todos los usuarios');
    res.json(usuarios);
});

router.post('/', (req, res) => {
    console.log('Creamos un usuario');
    usuarios.push({
        id: Math.floor(Math.random() * 100000) + 1,
        nombre: generateRandomString(10),
        apellidoPaterno: generateRandomString(10),
        edad: Math.floor(Math.random() * 100) + 1,
    });
    res.send("Usuario agregado");
});

router.delete('/:id', (req, res) => {
    const idEliminado = req.params.id;
    usuarios = usuarios.filter(object => {
        return object.id != idEliminado
    })
    console.log('Elimino usuarios');
    res.json(usuarios);
});

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Conjunto de caracteres posibles
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

export default router;











// let users = [
//     {
//         rut: '12.345.678-9',
//         nombre: 'Mario',
//         apellidoPaterno: 'Cares',
//         email: 'algo@correo.com'
//     },
//     {
//         rut: '1-9',
//         nombre: 'Martina',
//         apellidoPaterno: 'Lagos',
//         email: 'felina@correo.com'
//     }
// ];

// router.get('/:rut', (req, res) => {
//     const rut = req.params.rut;
//     console.log('Devolvemos el usuario con rut: ' + rut);
//     const userFind = users.find(usuario => usuario.rut === rut);
//     if (userFind) {
//         res.json(userFind);
//     } else {
//         res.send("No EXISTE el usuario");
//     }
// });

// router.post('/', (req, res) => {
//     console.log('Guardamos un usuario');
//     res.json({
//         rut: '1234-5',
//         nombre: 'Usuario',
//         apellidoPaterno: 'Nuevo',
//         email: 'veneka@correo.com'
//     });
// });

// router.put('/:rut', (req, res) => {
//     const rut = req.params.rut;
//     console.log('Buscamos el usuario con rut: ' + rut);
//     const userFind = users.find(usuario => usuario.rut === rut);
//     if (userFind) {
//         console.log('Actualizamos el usuario');
//         userFind.apellidoPaterno = "uno nuevo";
//         userFind.email = "nuevo@correo2.com";
//         res.json(userFind);
//     } else {
//         res.send("No EXISTE el usuario");
//     }
// });

// router.delete('/:rut', (req, res) => {
//     const rut = req.params.rut;
//     console.log('Buscamos el usuario con rut: ' + rut);
//     users = users.filter(usuario => usuario.rut !== rut);
//     res.send("Usuario eliminado");
// });
