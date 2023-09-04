import React, { useState, useEffect } from 'react'

import styles from './Cadastro.module.css'

import { useAuthentication } from '../../Hooks/useAutentication'

const Register=()=> {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading}=useAuthentication();

  const handleSubmit = async(e)=>{

    e.preventDefault();

    setError("");

    const user = {

      displayName,
      email,
      password

    }
    if(password !== confirmPassword){

      setError("As senhas precisam ser iguais")
      return 
    }

    const res = await createUser(user)

    console.log(res)

  }

  useEffect(()=>{

      if(authError){

        setError(authError) //subistitue o erro pelo erro de autenticação
      }

  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario </p>
      <form onSubmit={handleSubmit} className={styles.container}>

        <label>
          <span>Nome:</span>
          <input type='text' name='displayName' required placeholder='Nome de Usuario' 
          value={displayName} onChange={(e)=>setDisplayName(e.target.value)}></input>
        </label>
        <label>
          <span>Email:</span>
          <input type='email' name='email' required placeholder='Email de Usuario' 
          value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </label>
        <label>
          <span>Password:</span>
          <input type='password' name='password'  required placeholder='Senha de Usuario'
           value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        <label>
        <span>Confirmação da senha:</span>
          <input type='password' name='password' required placeholder='Comfirme sua senha' 
          value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
        </label>
        {!loading &&  <button className='btn'>Cadastrar</button>}
        {loading &&  <button className='btn' disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
     
      </div>
  )
}

export default Register