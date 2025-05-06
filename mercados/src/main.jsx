import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// Utiliza o provedor de rotas vindo do Router Dom.
import { RouterProvider } from 'react-router-dom'

// Importa a constante criada com as rotas estabelecidas.
import MyRouter from "./MyRouter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={MyRouter}/>
  </StrictMode>,
)
