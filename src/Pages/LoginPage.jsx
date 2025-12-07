import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const URL = "http://localhost:3004/users"
 
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const {login} = useAuth();
    
  const handleLogin = async(e) =>{
    e.preventDefault();
try{
 const res = await fetch(`${URL}?email=${email}&password=${senha}`);
 const data = await res.json();
 // data.length = verificar se teve alguma coisa correspondente ao fetch (se teve algo na array)
 if (data.length > 0){
    const userData = data[0] //se tiver, pegar o primeiro item do index da array
    const token = userData.token //pegar o token do user que foi encontrado dentro do index 0
    login(token, userData);
    navigate('/'); //devolver para o / (inicio da pagina, home, HomePage)
 }else{
    alert("Email ou Senha incorreta")
 }}catch (error) {
        console.error("Erro ao tentar login:", error);
        alert("Erro de conexão com o servidor.");
    }
}
  return (
    
    
    <div>
        <h1>Pagina de Login</h1>
        <form onSubmit={handleLogin}>
            <p>email</p>
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <br />
            <p>senha</p>
        <input type="text" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
        <br />
        <br />
        <input type="submit" value="LOGIN" />
        </form>
    </div>
  )
}

export default LoginPage