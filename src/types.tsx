interface ProyectoMusical {
    id: string,
    nombre: string,
    instrumentos: number,
    email: string,
    telefono: string,
    descripcion: string,
    generoMusical: string,
    password: string,
    imagenURL: string,
    prevSongURL: string
}

interface GeneroMusical{
    id: number,
    nombre: string
}

interface Cita {
    id: string,
    idProyecto: string,
    idPromocion: string,
    fechaHora: Date,
    telefono: string,
    vigencia: boolean
}

interface Instrumento {
    id: number,
    nombre: string 
}
