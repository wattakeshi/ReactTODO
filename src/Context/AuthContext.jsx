import React, { createContext, useState, useEffect, useContext } from "react"; 

export const AuthContext = createContext({
    isLoggedIn: false, //criando o estado
    user: null, //criando o user
    login: () => {}, //logian function para persistencia
    logout: ()=> {}, //logout function para tirar os dados do localstorage
});

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); 
    //adicionando loading para travar o useEffect ate tudo ser lido e completado
    const [loading, setLoading] = useState(true);
    
    //useEffect mounted para atualizar e verificar se o usuario tem Token ou nao
    useEffect( () => {
        const token = localStorage.getItem("userToken")
        const userDataString = localStorage.getItem("userData") 
        console.log(`token: ${token}  userDataString: ${userDataString}`)
        if(token && userDataString){
            setIsLoggedIn(true);
            setUser(JSON.parse(userDataString));
        }
        //adicionando a parte do loading para mudar de estado apos completar o useState
        setLoading(false)
    },[])

    //funcao de login persistente
    const login = (token, userData) => {
        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("Login funcionando! ",userData)
        setIsLoggedIn(true)
        setUser(userData)
      }

    //funcao logout
    const logout = () => {
        //removi tudo do localStorage (limpei os dados)
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
        //voltei o IsLoggendIn para falso e tirei informacoes do User
        setIsLoggedIn(false);
        setUser(null);
    }

    const contextValue = {
        isLoggedIn,
        user,
        login,
        logout
    };
 //travando o AuthContext ate o loading ser true

  if(loading){
    return <div>Carregando Pagina</div>
  }
  //quando terminar o loading, ira retornar o Provider
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};
  export const useAuth = () => {
        return useContext(AuthContext)
    }