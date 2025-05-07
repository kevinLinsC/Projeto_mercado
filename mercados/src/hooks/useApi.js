// Importa a url da api vindo do .env
const url = import.meta.env.VITE_API_URL;

import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

export function useVerificaLogin(){
    const [usuarios, setUsuarios] = useState([]);

    const { login } = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            try{
                const req = await fetch(`${url}/usuarios`);
                const users = await req.json();
                setUsuarios(users);
            }   
            catch(error){
                console.log(error.message);
            } 
        }

        fetchData();
    }, [])

    const verificaLogin = (data) => {
        const userToFind = usuarios.find((user) => {
            return user.email === data.email;
        });

        if(userToFind != undefined && userToFind.senha == data.senha) {
            login(userToFind);
            console.log("Usuário logado", userToFind.nome);
            return "Login efetuado com sucesso";
        }
        else {
            return "Usuário ou senha inválidos";
        }
    }

    return { verificaLogin };
}