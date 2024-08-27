import React from 'react';

import { useRef } from "react";
import { useInView } from "framer-motion";

import CartaProyectoMusical from '../components/CartaProyectoMusical';
import { Divider } from '@mui/material';
import MenuEufonia from '../components/menu/MenuEufonia';

export default function ArtistasPage(){
    const height = window.innerHeight;
    const width = window.innerWidth;

    return(
      <div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <h1>Conoce nuestro trabajo.</h1>            
          </div>
          <Divider style={{ margin: 20}} />
        </div>
        <div style={{ 
            width: width, 
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            rowGap: '20px'
            }}>
            {cards.map((card) => (
                <CartaProyectoMusical key={card.id} id={card.id} nombre={card.nombre} imagenURL={card.imagenURL} descripcion={card.descripcion} prevSongURL={card.prevSongURL} />
            ))}
        </div>
      </div>

    )
}

const cards: ProyectoMusical[] = [
    {
      id: 1,
      nombre: "Alterno Delete",
      instrumentos: 4,
      email: "proyecto1@example.com",
      telefono: "123-456-7890",
      descripcion: "En el corazón de Zacatecas, la ciudad de cantera rosa con sus entrañables y difíciles callejones, he estado tejiendo melodías desde 2017. Mi música es un viaje a través de la sutileza del chill, la nostalgia de las guitarras lo-fi y la profundidad de los versos trap. Este canal es mi lienzo, donde comparto mis creaciones musicales.",
      generoMusical: "Rock",
      password: "password123",
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/0ruDKCONAQDkwZjYrSuqYk?utm_source=generator'
    },
    {
      id: 2,
      nombre: "Viajero",
      instrumentos: 5,
      email: "proyecto2@example.com",
      telefono: "098-765-4321",
      descripcion: "Banda Jerezana de Rock Alternativo.",
      generoMusical: "Jazz",
      password: "password456",
      imagenURL: "https://i.imgur.com/QnC4ZV6.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/1G5GEaKMUYJbiYnDWWBVNw'
    },
    {
      id: 3,
      nombre: "Hovering Sex Vipers",
      instrumentos: 3,
      email: "proyecto3@example.com",
      telefono: "555-123-4567",
      descripcion: "Un proyecto musical melódico.",
      generoMusical: "Pop",
      password: "password789",
      imagenURL: "https://i.imgur.com/2oQ2ye9.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/6WRRxgKx2gAB60TuZppmg5?utm_source=generator'
    },
    {
      id: 4,
      nombre: "Karatevatos",
      instrumentos: 3,
      email: "proyecto3@example.com",
      telefono: "555-123-4567",
      descripcion: "Fast punk rock/Hardcore melódico desde Zacatecas, México.",
      generoMusical: "Pop",
      password: "password789",
      imagenURL: "https://i.imgur.com/XfXq5uq.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
    },
    {
      id: 5,
      nombre: "Zai Esparza",
      instrumentos: 3,
      email: "proyecto3@example.com",
      telefono: "555-123-4567",
      descripcion: "Un proyecto musical melódico.",
      generoMusical: "Pop",
      password: "password789",
      imagenURL: "https://i.imgur.com/MRluw2k.png",
      prevSongURL: 'https://open.spotify.com/embed/track/5bup1GOry3Zii9mF0Gj8wM?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
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
      imagenURL: "https://i.imgur.com/LxBJBGi.jpeg",
      prevSongURL: 'https://open.spotify.com/embed/track/41xqWgu0gSsYhlS11pA15S?utm_source=generator'
    }
  ];