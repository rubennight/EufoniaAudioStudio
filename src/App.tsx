import './App.css'
import { motion } from "framer-motion";
import IntroPage from './components/IntroPage'
import { Divider } from '@mui/material';
import MenuEufonia from './components/menu/MenuEufonia';
import SectionPage from './components/SectionPage';
import eufoniaAudioStudioPromo from './assets/gifs/Estudio-de-grabación-en-Zacatecas.gif';

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div style={{ width: width }}>
      <div style={{ top: 0 }}>
        <SectionPage>
          <img src={eufoniaAudioStudioPromo} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
        </SectionPage>        
      </div>
      <IntroPage />
      <div>
        <SectionPage>
          <div>
            <motion.img src="https://i.imgur.com/Kvtje2D.png" style={{ height: '100%', width: '100%', objectFit: 'contain', borderRadius: 20 }}
            />
            <br />
            <div style={{ 
              display: 'flex',
              flexDirection: 'row'
            }}>
              <h2>Nuestra misión... Que te escuchen como quieres.</h2>  
            </div>
          </div>
        </SectionPage>
        <MenuEufonia />         
      </div>
    </div>
  )
}

export default App
