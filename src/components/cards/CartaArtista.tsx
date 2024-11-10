
const CartaArtista: React.FC <{ proyectoMusical: ProyectoMusical, seleccionado: boolean}>  = ({ proyectoMusical, seleccionado })=> {

    return (
        <div 
            className="cartaArtista"
            >
            <div 
                className="imagen" 
                style={{
                    backgroundImage: `url(${proyectoMusical.imagenURL})`,
                }} 
            />

        </div>
    );
}

export default CartaArtista;