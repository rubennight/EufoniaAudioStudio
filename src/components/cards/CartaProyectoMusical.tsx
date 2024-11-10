import { motion } from "framer-motion";
import IFrame from "../IFrame";

const CartaProyectoMusical: React.FC <{ proyectoMusical: ProyectoMusical}>  = ({ proyectoMusical })  => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <motion.div style={{
        position: "relative",
        height: height,
        width: width * 0.3,
        overflow: "hidden",
        backgroundColor: "black",
        border: "1px solid #ddd", // Borde sutil
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra elegante
      }}
      whileHover="hovered"
    >
        <motion.div style={{
                backgroundImage: `url(${proyectoMusical.imagenURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',
                position: 'relative',
                bottom: 0,
                right: 0,
            }}  
            variants={{
                hovered: {
                    height: '50%',
                    width: '50%',
                    bottom: 0,
                    right: 0,
                    transition: { duration: 0.5 },                    
                }
            }}
        />
        <motion.div style={{
            position: "absolute",
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
        }}
        initial={{ opacity: 0 }}
        variants={{
            hovered:{
                opacity: 1,
                transition: { duration: 0.5 }                
            }
        }}
        >
            <motion.div style={{
                width: "100%",
                height: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: 'justify',
                padding: 25
            }}
            >
                <IFrame url={proyectoMusical.prevSongURL} />
            </motion.div>
        </motion.div>
        <motion.h2 
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "30px",
                    opacity: 0,
                    color: "#FFBB00",
                    textAlign: 'right'
                }}  
                variants={{
                    hovered:{
                        opacity: 1,
                        transition: { duration: 1.5 }                
                    }
                }}
            >
                { proyectoMusical.nombre }
        </motion.h2>        
    </motion.div>
  );
}

export default CartaProyectoMusical;
