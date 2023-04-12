/* eslint-disable no-unused-vars */
import { useState } from "react"
import './home.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Home(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); //propriedade de navegação

    async function handleLogin(e){
        e.preventDefault();

        if (email !== '' && password !== '') {
            await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/admin', {replace: true})
            })
            .catch((error) => {
                alert("Usuario ou Senha inválido");
            })
        }else{
            alert("Preencha todos os campos");
        }
    }

    return (
      <div className="home-container">
        <h1>Lista de tarefas</h1>
        <span>Gerencie sua agenda de forma fácil</span>

        <form className="form" onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Digite seu e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Acessar</button>
            <Link className="button-link" to="/register">Não possi uma conta? Cadastre-se.</Link>
        </form>
      </div>
    )
  }
