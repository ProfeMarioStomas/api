import { prisma } from '../prismaClient.js';

export const obtenerLibros = async () => {
    console.log('En libroService, buscando todos los libros');
    const libros = await prisma.libro.findMany();
    return libros;
}

export const obtenerLibro = async (isdnEntrando) => {
    console.log('En libroService, buscando el libro con isdn:', isdnEntrando);
    const libro = await prisma.libro.findUnique({
        where: {
            isdn: isdnEntrando
        }
    });
    return libro;
}

export const borrarLibroPorIsdn = async (isdnEntrando) => {
    console.log('En libroService, eliminando el libro con isdn:', isdnEntrando);
    const libro = await prisma.libro.delete({
        where: {
            isdn: isdnEntrando
        }
    });
    return libro;
}

export const borrarLibroPorId = async (IdEntrando) => {
    console.log('En libroService, eliminando el libro con id:', IdEntrando);
    const libroEncontrado = await prisma.libro.findUnique({
        where: {
            id: IdEntrando
        }
    });

    if (libroEncontrado) {
        const libro = await prisma.libro.delete({
            where: {
                id: IdEntrando
            }
        });
        return libro;
    } else {
        return {
            estado: 'error',
            mensaje: 'No encuentro el libro'
        };
    }
}