import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtistasPage from './pages/ArtistasPage.tsx';
import ServiciosPage from './pages/ServiciosPage.tsx';
import CitasPage from './pages/CitasPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/artistas-eufonia",
    element: <ArtistasPage />
  },
  {
    path: "/servicios",
    element: <ServiciosPage />
  },
  {
    path: "/citas",
    element: <CitasPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
