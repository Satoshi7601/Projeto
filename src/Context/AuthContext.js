import { useContext, createContext } from "react";


const AuthContext =createContext();

export function AuthProvider({children,value}){

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

//Pega o as informaçoes do value
export function useAuthValue(){

    return useContext(AuthContext)
}