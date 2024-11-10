import { Button } from "@mui/material";

const MenuEufoniaStudio = () =>{
    const height = window.innerHeight;

    return(
        <div className="wrapper" style={{ height: height }}>
            <div className="menuBoton menuBoton1" style={{ backgroundImage: 'url(https://i.imgur.com/Kvtje2D.png)'}}>
                <div className="glassBackground">
                    <div className="menuTitulo">
                        <p>Acerca de</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="glassBackgroundContent1">
                    <p>
                        Somos un estudio de grabación con más de 10 años de experiencia
                    </p>
                </div>
            </div>
            <div className="menuBoton menuBoton2" style={{ backgroundImage: 'url(https://i.imgur.com/eF1q3ha.png)'}}>
                <div className="glassBackground">
                    <div className="menuTitulo">
                        <p>Trabajo</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="glassBackgroundContent1">
                    <p>
                        Conoce a los artistas que han trabajado con nosotros
                    </p>
                </div>
            </div>
            <div className="menuBoton menuBoton3" style={{ backgroundImage: 'url(https://i.imgur.com/9QCQLEQ.png)'}}>
                <div className="glassBackground">
                    <div className="menuTitulo">
                        <p>Contacto</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="glassBackgroundContent1">
                    <h2>Haz una cita</h2>
                    <input className="inputEufonia" placeholder="Correo Electrónico" />
                    <input className="inputEufonia" placeholder="Contraseña" type="password" />
                    <div className="preguntasInicioSesion">
                        <a href="/registro" className="linkPregunta">¿Tu proyecto musical aún no está registrado?</a>
                        <br />
                        <a href="/recuperar-contraseña" className="linkPregunta">¿Olvidaste la contraseña?</a>
                    </div>
                    <Button size="small" style={{ color: '#f1f1f1', width: '100%', height: '40%'}}>Iniciar Sesión</Button>
                </div>
            </div>
            <div className="menuBoton menuBoton4" style={{ backgroundImage: 'url(https://i.imgur.com/hi6PMBh.png)'}}>
                <div className="glassBackground">
                    <div className="menuTitulo">
                        <p>Belicore</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="glassBackgroundContent1">
                    <p>
                        Puro belicore, compa
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MenuEufoniaStudio;