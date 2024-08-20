import { motion } from "framer-motion";

const CartaProyectoMusical = ({ id, nombre, imagenURL } : ProyectoMusical) => {
    const height = window.innerHeight;

    return(
        <motion.div>
            <img src={imagenURL} height={height * 0.4} />
            <motion.h5>{nombre}</motion.h5>
        </motion.div>
    )
}

export default CartaProyectoMusical;