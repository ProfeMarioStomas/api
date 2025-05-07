import { Router } from 'express';
import { actualizarLibro, borrarLibroPorId, 
    borrarLibroPorIsdn, 
    guardarLibro, 
    obtenerLibro, 
    obtenerLibros 
} from '../services/libro.service.js';

const router = Router();

router.get('/', async (req, res) => {
    console.log('Devolvemos todos los libros');
    res.json(await obtenerLibros());
});

router.get('/:isdn', async (req, res) => {
    const isdn = req.params.isdn;
    console.log('Devolvemos un único libro');
    res.json(await obtenerLibro(isdn));
});

router.post('/', async (req, res) => {
    const dataEntrando = req.body;
    console.log('Guardamos un libro');
    res.json(await guardarLibro(dataEntrando));
});

router.put('/:isdn', async (req, res) => {
    const isdnPorActualizar = req.params.isdn;
    const dataEntrando = req.body;
    console.log('Actualizar un libro');
    res.json(await actualizarLibro(dataEntrando, isdnPorActualizar));
});

router.delete('/:isdn', async (req, res) => {
    const isdn = req.params.isdn;
    console.log('Eliminamos un libro');
    res.json(await borrarLibroPorIsdn(isdn));
});

router.delete('/porId/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Eliminamos un libro');
    res.json(await borrarLibroPorId(id));
});

export default router;