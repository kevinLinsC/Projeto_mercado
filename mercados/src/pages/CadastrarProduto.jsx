import React from 'react'

import { useContext } from 'react'
import { AuthContext } from '../contexts/UserContext'
import { Navigate } from "react-router-dom"

import Container from 'react-bootstrap/esm/Container'

import Formulario from "../components/Formulario.jsx"

const CadastrarProduto = () => {
  const { usuarioNome } = useContext(AuthContext)
    
  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div style={{height: "93.5vh"}}>
      <Container>
        <h1>Cadastro Produto</h1>
        <Formulario page="cadastro" />
      </Container>
    </div>
  )
};

export default CadastrarProduto;