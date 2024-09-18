import { motion } from 'framer-motion';

    export default function ServiciosPage(){
        const height = window.innerHeight;
        const width = window.innerWidth;

        //<img src="https://i.imgur.com/zT9JUtZ.jpeg" style={{ height: height, objectFit: 'cover', borderRadius: 15 }} />
        return(
            <div>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }}
                    style={{
                        borderRadius: 15,
                        overflow: 'hidden',
                        textAlign: 'left'
                    }}
                    >
                    <h1>Grabación</h1>    
                    <h1>Mezcla</h1>
                    <h1>Masterización</h1>
                    <h1>Producción Musical</h1>
                    <h1>Instrumentales para genero urbano</h1>
                </motion.div>            
            </div>
        )
    }