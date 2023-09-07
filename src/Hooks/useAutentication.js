import {db} from "../firebase/config"

import{

    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';


import { useState,useEffect } from 'react';

export const useAuthentication  = () =>{

    const [error, setError] = useState(null)
    
    const [loading, setLoading] = useState(null)

    //cancela a autenticação caso as coisas não derem certo
    const [cancelled, setCancelled] = useState(false) 

    const auth = getAuth()

    function checkIfIsCancelled(){

        if(cancelled){

            return

        }

    }
    const createUser =async(data)=>{
        checkIfIsCancelled()

        setLoading(true)
        setError("")
        
        try{

            const {user} = await createUserWithEmailAndPassword(

                auth,//faz a chamada da autenticação
                data.email,
                data.password

            )

            await updateProfile(user,
                {displayName: data.displayName,
                
                });

                setLoading(false)
            return user;

        }catch(error){
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;
           
            //mapeamentos dos erros no cadastro
            if(error.message.includes("Password")){

                systemErrorMessage ="A senha precisa conter pelo menos 6 caracteres"

            } else if(error.message.includes("email-already")){

                systemErrorMessage ="usuario já cadastrado"
            }else{

                systemErrorMessage = "Ocorreu um erro por favor tente mais tarde"

            }

            systemErrorMessage ="Usuario cadastrado com sucesso"
            setLoading(false)
            setError(systemErrorMessage)
        }

        
    };
   
    //funçao que faz a saidada do usuario do login
     
    
    const logout= () =>{

        checkIfIsCancelled()

        signOut(auth)

    } 

    //faz o login do usuario    
    const  login =async(data) =>{
        
        checkIfIsCancelled()

        setLoading(true)
        setError(false)
        
        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)//faz a pasagem dos dados
            setLoading(false)

        } catch (error) {
         
            let systemErrorMessage;
           
          
            if(error.message.includes("user-not-found")){//verifica se o usuario existe

                systemErrorMessage = "Usuario não encotrado"

                }else if(error.message.includes("wrong-password")){

                    systemErrorMessage =" Senha incorreta ";
                }else {

                    systemErrorMessage ="Erro por favor tente mais tarde";

                }
            
            setError(systemErrorMessage)
            setLoading(false)
        
        }

    }

    useEffect(()=>{ //coloca o cancelado como true assim que sair da pagina

        return ()=> setCancelled(true)

    }, [])

    return{

        auth,
        createUser, 
        error, 
        loading,
        logout,
        login
    };

};