    import { Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';

    export default function ServiciosPage(){
        const height = window.innerHeight;
        const width = window.innerWidth;

        return(
            <div>
                <motion.div style={{ 
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'left',
                    height: '100vh',
                    width: '100vw'
                    }}>
                    <motion.div 
                        initial={{ x: height * 2 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 80, damping: 10 }}
                        style={{
                            borderRadius: 15,
                            overflow: 'hidden'
                        }}
                        >
                        <img src="https://i.imgur.com/zT9JUtZ.jpeg" style={{ height: height, objectFit: 'cover', borderRadius: 15 }} />
                    </motion.div>
                    <motion.div
                        initial={{ x: height * 2}}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 80, damping: 10 }}
                        style={{
                            borderRadius: 15,
                            height: height * 0.8,
                            width: width * 0.4,
                            flexDirection: 'column'
                        }}>
                        <h2>Registrate</h2>
                        <br />
                        <br />
                        <TextField variant='standard' label='Correo Electrónico' fullWidth={true} />
                        <br />
                        <br />
                        <TextField variant='standard' label='Contraseña' type='password' fullWidth={true} />
                        <br />
                        <br />
                        <Button fullWidth={true} variant='contained' sx={{ borderRadius: 5, height: height * 0.1 }}>Login</Button>
                    </motion.div>
                </motion.div>                
            </div>
        )
    }