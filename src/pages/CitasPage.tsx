import LabelDinamico from "../components/LabelDinamico";

export default function CitasPage(){
    const width = window.innerWidth;

    return(
        <div 
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row'
            }}
            >
            <div>
                <LabelDinamico 
                    translateX={-650}
                    >
                    Registra tu proyecto, musical.         
                </LabelDinamico>
                <br />
                <LabelDinamico 
                    translateX={-650} 
                    backgroundColor={"#E98D27"} 
                    delay="0.5s"
                    >
                    Conocer tu estilo es poder darle una identidad a tu sonido.
                </LabelDinamico>
                <br />
                <LabelDinamico
                    translateX={-650}
                    backgroundColor="#1D2549"
                    delay="1s">
                    Nuestra plataforma te ayudará a llevar un control de tus citas y sesiones.
                </LabelDinamico>
                <br />
                <LabelDinamico
                    translateX={-650}
                    backgroundColor="#E7AE40"
                    delay="1.5s">
                    Tus master serán entregadas por este medio.
                </LabelDinamico>
                <br/>
                <LabelDinamico
                    translateX={-650}
                    backgroundColor="#345985"
                    delay="2s">
                    De esta manera tenemos un control más seguro de tu música.
                </LabelDinamico>                    
            </div>
            <div>
                
            </div>
        </div>
    )
}