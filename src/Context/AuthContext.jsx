import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'

export const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    login: () => {},
    logout: ()=> {},
})

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();
}
