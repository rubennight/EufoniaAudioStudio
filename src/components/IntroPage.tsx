import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import CartaProyectoMusical from "./CartaProyectoMusical";

const IntroPage = () => {
  const [seleccionadoId, setSeleccionadoId] = React.useState<number | null>();
  const ref = useRef(null);

  const {scrollYProgress } = useScroll({ container: ref })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  return (
    <>
      <motion.div 
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          overflowX: 'scroll'
        }} 
        >
        {cards.map((card) => (
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              onClick={() => setSeleccionadoId(card.id)}
              style={{ x }}
              >
              <CartaProyectoMusical key={card.id} id={card.id} nombre={card.nombre} imagenURL={card.imagenURL} />
            </motion.div>
        ))}
      </motion.div>    
    </>
  );
};

export default IntroPage;

const cards: ProyectoMusical[] = [
  {
    id: 1,
    nombre: "Proyecto 1",
    instrumentos: 4,
    email: "proyecto1@example.com",
    telefono: "123-456-7890",
    descripcion: "Un proyecto musical emocionante.",
    generoMusical: "Rock",
    password: "password123",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 2,
    nombre: "Proyecto 2",
    instrumentos: 5,
    email: "proyecto2@example.com",
    telefono: "098-765-4321",
    descripcion: "Un proyecto musical innovador.",
    generoMusical: "Jazz",
    password: "password456",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 3,
    nombre: "Proyecto 3",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 4,
    nombre: "Proyecto 4",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 5,
    nombre: "Proyecto 5",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 6,
    nombre: "Proyecto 6",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 7,
    nombre: "Proyecto 7",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 8,
    nombre: "Proyecto 8",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 9,
    nombre: "Proyecto 9",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 10,
    nombre: "Proyecto 10",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 11,
    nombre: "Proyecto 11",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 12,
    nombre: "Proyecto 12",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 13,
    nombre: "Proyecto 13",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 14,
    nombre: "Proyecto 14",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  },
  {
    id: 15,
    nombre: "Proyecto 15",
    instrumentos: 3,
    email: "proyecto3@example.com",
    telefono: "555-123-4567",
    descripcion: "Un proyecto musical melódico.",
    generoMusical: "Pop",
    password: "password789",
    imagenURL: "https://i.imgur.com/LxBJBGi.jpeg"
  }
];