import './App.css'
import { motion } from "framer-motion";
import IntroPage from './components/IntroPage'
import MenuEufonia from './components/menu/MenuEufonia';
import SectionPage from './components/SectionPage';
import eufoniaAudioStudioPromo from './assets/gifs/Estudio-de-grabación-en-Zacatecas.gif';
import MenuEufoniaStudio from './components/menu/MenuEufoniaStudio';

function App() {
  const width = window.innerWidth;

  return (
    <div style={{ width: width }}>
        <SectionPage>
          <img src={eufoniaAudioStudioPromo} style={{ height: '100%', width: '100%', objectFit: 'fill' }} />
        </SectionPage>        
      <IntroPage />
       {/*<SectionPage> 
          <div>
            <motion.img src="https://i.imgur.com/Kvtje2D.png" style={{ height: '100%', width: '100%', objectFit: 'fill', borderRadius: 20 }}
            />
          </div>
        </SectionPage>*/}
      <MenuEufoniaStudio />       
    </div>
  )
}

export default App
