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
    
    //useEffect mounted para atualizar e verificar se o usuario tem Token ou nao
    useEffect( () => {
        const token = localStorage.getItem("userToken")
        const userDataString = localStorage.getItem("userData") 
        if(token && userDataString){
            setIsLoggedIn(true);
            setUser(JSON.parse(userDataString));
        }
    },[])

    //funcao de login persistente
    const login = (token, userData) => {
        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
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
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};
  export const useAuth = () => {
        return useContext(AuthContext)
    }