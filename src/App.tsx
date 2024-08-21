import './App.css'
import { motion } from "framer-motion";
import IntroPage from './components/IntroPage'
import { Divider } from '@mui/material';
import MenuEufonia from './components/menu/MenuEufonia';
import SectionPage from './components/SectionPage';

function App() {
  const height = window.innerHeight;

  return (
    <>
      <div>
        <MenuEufonia />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          style={{ color: '#0092CE' }}
          >
          Eufonía Audio Studio
        </motion.h1>
        <Divider style={{ margin: 50}} />
      </div>
      <IntroPage />
      <div style={{ height: height * 0.3}}>
        <SectionPage>Nuestra misión, que te escuchen como quieres</SectionPage>
        <SectionPage>Nos dedicamos a la producción y post-producción de audio</SectionPage>
      </div>
    </>
  )
}

export default App
