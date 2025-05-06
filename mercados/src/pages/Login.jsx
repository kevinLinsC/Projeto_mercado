// Importação dos componentes do bootstrap.
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

// Importação do Hook form pra validar e enviar o formulário.
import { useForm } from "react-hook-form"


import { BsBoxArrowInRight } from "react-icons/bs"

const Login = () => {
  return (
    <div>
      <Container style={{height: "100vh"}} className="justify-content-center align-content-center">
        <BsBoxArrowInRight style={{
          fontSize: "300px",
          color: "green",
          margin: "auto",
          width: "100%"
        }}/>

        <Form style={{width: "75%", margin: "auto", textAlign: "center"}}>
          {/* Caixinha de email */}
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-5">
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </FloatingLabel>

          {/* Caixinha de senha */}
          <FloatingLabel controlId="floatingInputPassword" label="Senha" className="mb-5">
            <Form.Control type="password" placeholder="Senha"></Form.Control>
          </FloatingLabel>

          {/* Botão para envio do formulario */}
          <Button variant="primary" type="submit" className="mb-5" size="lg">Login</Button>

          {/* Alerta caso haja erro */}
          <Alert variant="danger" className="mb-5" style={{position: "absolute", width: "30%", left: "35%", top: "86%"}}>Sim</Alert>
        </Form>
      </Container>
    </div>
  )
}

export default Login