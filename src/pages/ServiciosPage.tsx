    import { motion } from 'framer-motion';


    export default function ServiciosPage(){
        const height = window.innerHeight;
        const width = window.innerWidth;

        return(
            <motion.div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
                }}>
                <motion.div 
                    initial={{ y: height * 2 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 10 }}
                    style={{
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                        borderRadius: 15,
                        overflow: 'hidden'
                    }}
                    >
                    <img src="https://i.imgur.com/zT9JUtZ.jpeg" style={{ height: height * 0.8, objectFit: 'cover', borderRadius: 15 }} />
                </motion.div>
            </motion.div>
        )
    }