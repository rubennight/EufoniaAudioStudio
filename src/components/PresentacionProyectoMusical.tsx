
const PresentacionProyectoMusical: React.FC <{ proyectoMusical: ProyectoMusical}>  = ({ proyectoMusical }) => {
    const height = window.innerHeight;

    return(
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                    style={{
                        backgroundImage: `url(${proyectoMusical.imagenURL})`,
                        backgroundSize: 'auto',
                        backgroundPosition: 'center',
                        height: height,
                        width: '100%',   
                        overflow: 'hidden',
                        marginRight: '20px',
                    }}>
                    <h3>{proyectoMusical.nombre}</h3>
                    <p>{proyectoMusical.descripcion}</p>
                </div>  
            </div>
        </div>
    )
}

export default PresentacionProyectoMusical;