import { Divider, TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LabelDinamico from "../components/LabelDinamico";
import React from "react";
import BotonDinamico from "../components/BotonDinamico";
import SelectChip from "../components/SelectChip";
import SelectChipInstrumentos from "../components/SelectChipInstrumentos";

const instrumentos: Instrumento[] = [
    { id: 0, nombre: 'Otro' },
    { id: 1, nombre: 'Guitarra Eléctrica' },
    { id: 2, nombre: 'Guitarra Acústica' },
    { id: 3, nombre: 'Bajo' },
    { id: 4, nombre: 'Batería' },
    { id: 5, nombre: 'Teclado' },
    { id: 6, nombre: 'Percusión Personalizada' },
    { id: 7, nombre: 'Acordeón' },
    { id: 8, nombre: 'Trompeta' },
    { id: 9, nombre: 'Tuba' },
    { id: 10, nombre: 'Saxofón' },
    { id: 11, nombre: 'Marimba' },
    { id: 12, nombre: 'Contrabajo' },
    { id: 13, nombre: 'Launchpad' },
    { id: 14, nombre: 'Voz' },
    { id: 15, nombre: 'DJBoot' },
    { id: 16, nombre: 'Violin' },
    { id: 17, nombre: 'Violinchelo' },
    { id: 18, nombre: 'Chelo' },
    { id: 19, nombre: 'Beats Personalizados' },
    { id: 20, nombre: 'Sintetizador' },
    { id: 21, nombre: 'Ukulele' },
    { id: 22, nombre: 'Banjo' },
    { id: 23, nombre: 'Mandolina' },
    { id: 24, nombre: 'Arpa' },
    { id: 25, nombre: 'Clarinete' },
    { id: 26, nombre: 'Flauta' },
    { id: 27, nombre: 'Oboe' },
    { id: 28, nombre: 'Fagot' },
    { id: 29, nombre: 'Trombón' },
    { id: 30, nombre: 'Flauta dulce' },
    { id: 31, nombre: 'Armónica' }
];

const generosMusicales: GeneroMusical[] = [
    { id: 0, nombre: 'Otro'},
    { id: 1, nombre: 'Reggaetón' },
    { id: 2, nombre: 'Pop Latino' },
    { id: 3, nombre: 'Banda' },
    { id: 4, nombre: 'Mariachi' },
    { id: 5, nombre: 'Norteño' },
    { id: 6, nombre: 'Cumbia' },
    { id: 7, nombre: 'Salsa' },
    { id: 8, nombre: 'Rock en Español' },
    { id: 9, nombre: 'Corridos' },
    { id: 10, nombre: 'Hip-hop / Rap' },
    { id: 11, nombre: 'Trap Latino' },
    { id: 12, nombre: 'Balada Romántica' },
    { id: 13, nombre: 'Electrónica / EDM' },
    { id: 14, nombre: 'Ranchera' },
    { id: 15, nombre: 'Música Regional Mexicana' },
    { id: 16, nombre: 'Música Tropical' },
    { id: 17, nombre: 'Jazz' },
    { id: 18, nombre: 'Indie Rock' },
    { id: 19, nombre: 'Pop' },
    { id: 20, nombre: 'R&B' },
    { id: 21, nombre: 'Boleros' },
    { id: 22, nombre: 'Ska' },
    { id: 23, nombre: 'Metal' },
    { id: 24, nombre: 'K-Pop' },
    { id: 25, nombre: 'Música Cristiana' },
    { id: 26, nombre: 'Reggae' },
    { id: 27, nombre: 'Folk' },
    { id: 28, nombre: 'Música Clásica' },
    { id: 29, nombre: 'Punk' },
    { id: 30, nombre: 'Trap en Español' },
];

export default function CitasPage(){
    const [registrado, setRegistrado ] = React.useState(false);
    const [proyecto, setProyecto] = React.useState({
        nombre: '',
        descripcion: '',
        instrumentos: '',
        generoMusical: '',
        email: '',
        telefono: '',
        password: ''
    })

    const width = window.innerWidth;

    const onClickEstoyRegistrado = () =>{
        setRegistrado(!registrado);
    }

    const onClickRegistrarse = () =>{

        const nuevoProyecto: Partial<ProyectoMusical> = {
            nombre: proyecto.nombre,
            descripcion: proyecto.descripcion,
            instrumentos: parseInt(proyecto.instrumentos),
            email: proyecto.email,
            telefono: proyecto.telefono,
            password: proyecto.password
        };

        console.log(nuevoProyecto);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setProyecto({
                ...proyecto,
                [e.target.name]: e.target.value
            });
    };

    return(
        <div 
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}
            >
            <AnimatePresence>
                {!registrado && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
                        >
                            <LabelDinamico translateX={-650} backgroundColor="#1D2549">
                                Registra tu proyecto musical con nosotros.
                            </LabelDinamico>
                            <Divider orientation="vertical" />
                            <TextField onChange={handleChange} name="nombre" variant="standard" sx={{ width: width * 0.4 }} size="small" label="Nombre de proyecto" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
                        >
                            <LabelDinamico translateX={-650} backgroundColor="#345985" delay="0.5s">
                                Nuestra plataforma te ayudará a llevar un control de tus citas y sesiones.
                            </LabelDinamico>
                            <Divider orientation="vertical" />
                            <TextField onChange={handleChange} name="telefono" variant="standard" sx={{ width: width * 0.4 }} size="small" label="Telefono" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
                        >
                            <LabelDinamico translateX={-650} backgroundColor="#1A76AA" delay="1s">
                                Conocer tu estilo es poder darle una identidad a tu sonido.
                            </LabelDinamico>
                            <Divider orientation="vertical" />
                            <TextField onChange={handleChange} name="descripcion" variant="standard" sx={{ width: width * 0.4 }} size="small" label="Describe tu proyecto" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
                        >
                            <LabelDinamico translateX={-650} delay="1.5s">
                                ¿Cómo arreglas ritmo?
                            </LabelDinamico>
                            <Divider orientation="vertical" />
                            <SelectChip generos={generosMusicales} width={width * 0.4} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}
                        >
                            <LabelDinamico translateX={-650} delay="2s" backgroundColor={"#A7D0E9"}>
                                ¿Qué le da forma a tu sonido?
                            </LabelDinamico>
                            <Divider orientation="vertical" />
                            <SelectChipInstrumentos instrumentos={instrumentos} width={width * 0.4} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <AnimatePresence>
                <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px'}}>
                    <LabelDinamico
                        translateX={-650}
                        backgroundColor="#E98D27"
                        delay="2.5s">
                        Tus master serán entregadas por este medio.
                    </LabelDinamico>
                    <Divider orientation="vertical" />
                    <TextField onChange={handleChange} name="email" variant="standard" sx={{ width: width * 0.4}} size="small" label="Correo Electrónico" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', gap: '5px'}}>
                    <LabelDinamico
                        translateX={-650}
                        backgroundColor="#E7AE40"
                        delay="3s">
                        De esta manera tenemos un control más seguro de tu música.
                    </LabelDinamico>
                    <Divider orientation="vertical" />        
                    <TextField type="password" onChange={handleChange} name="password" variant="standard" sx={{ width: width * 0.4}} size="small" label="Contraseña" />            
                </motion.div>
                <br />
                <Divider />
                <br />
                <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <BotonDinamico backgroundColor="Green" beforeHoverColor="Green" hoverColor="#FFFFFF" onClick={onClickRegistrarse}>Entrar o Registrarme</BotonDinamico>           
                    <BotonDinamico backgroundColor="#0092CE" beforeHoverColor="#0092CE" hoverColor="#FFFFFF" onClick={onClickEstoyRegistrado}>Ya estoy registrado</BotonDinamico>        
                    <BotonDinamico hoverColor="#FFFFFF" beforeHoverColor="#E7AE40">Olvidé mi correo o contraseña</BotonDinamico>                  
                </motion.div>                
            </AnimatePresence>
        </div>
    )
}