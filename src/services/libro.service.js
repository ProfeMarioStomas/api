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

export const guardarLibro = async (dataEntrando) => {
    const libroEncontrado = await prisma.libro.findUnique({
        where: {
            isdn: dataEntrando.isdn
        }
    });
    if (libroEncontrado) {
        return {
            estado: 'error',
            mensaje: 'El isdn ya está registrado'
        };
    } else {
        const libroNuevo = await prisma.libro.create({
            data: dataEntrando
        });
        return libroNuevo; 
    }
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

export const actualizarLibro = async (dataEntrando, isdnPorActualizar) => {
    const libroEncontrado = await prisma.libro.findUnique({
        where: {
            isdn: isdnPorActualizar
        }
    });
    if (!libroEncontrado) {
        return {
            estado: 'error',
            mensaje: 'El isdn no existe'
        };
    } else {
        const libroEncontradoPorISDN = await prisma.libro.findUnique({
            where: {
                isdn: dataEntrando.isdn
            }
        });
        if (libroEncontradoPorISDN) {
            return {
                estado: 'error',
                mensaje: 'El isdn ya está registrado'
            };
        } else {
            const libroActualizado = await prisma.libro.update({
                data: dataEntrando,
                where: {
                    isdn: isdnPorActualizar
                }
            });
            return libroActualizado; 
        }
    }
}