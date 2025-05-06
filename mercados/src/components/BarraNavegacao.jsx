import React from 'react'

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

import { BsShop } from "react-icons/bs"

const BarraNavegacao = () => {
    const usuarioNome = "Visitante";
  return (
    <div>
        <Navbar expand='lg' bg='success' data-bs-theme='dark'>
            <Container>
                {/* Logomarca do site */}
                <Navbar.Brand href='/home'>
                    {/* Icone da logo */}
                    <BsShop size="1.5em" className='me-2' color='white'/>
                    {/* Texto logo */}
                    Juice WRLD
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='minha-nav' />

                <Navbar.Collapse id='minha-nav'>
                    <Nav className="me-auto">
                        {/* Paginas */}
                        <Nav.Link href="/home">Produtos</Nav.Link>
                        <Nav.Link href="/cadastra-produto">Cadastro</Nav.Link>
                    </Nav>
                    
                    <Nav className='justify-content-end'>
                        {/* Nome do usuário */}
                        <Navbar.Text style={{color: "white", marginRight:"5px"}}>
                            Usuário: Jarad Higgins           
                        </Navbar.Text>

                        {/* Caso o usuário tenha feito login, aparece o botão de sair, se não, o botão de entrar */}
                        {
                            usuarioNome === "Visitante" ? (
                                <>
                                    <Button variant='primary' href='/login'>
                                        Entrar
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant='danger' href='/login'>Sair</Button>
                                </>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNavegacao