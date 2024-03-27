import { createContext, useState } from "react";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        email: "joao@gmail.com"
    })


    function login(email, senha) {

        if (email == "joao@gmail.com" && senha == "123") {
            setUser({
                nome: "Joao",
                email
            })
            return "ok"
        }
        if (email == "maria@gmail.com" && senha == "123") {
            setUser({
                nome: "Maria",
                email
            })
            return "ok"
        }
        
        return 'E-mail ou senha inválidos'
        

    }

    function logout(){
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    )

}