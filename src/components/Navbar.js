import React from 'react'
import { NavLink } from 'react-router-dom'

import { useAuthentication } from '../Hooks/useAutentication'
import { useAuthValue } from '../Context/AuthContext'

import styles from './Navbar.module.css'
const Navbar=()=> {

    const {user} = useAuthValue()
  return (

        <nav className={styles.navbar}>

            <NavLink className={styles.brand} to="/">
                Mini<span>Blog</span>

            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive})=>(isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li>
                        <NavLink to="/About"  className={({isActive})=>(isActive ? styles.active : "")}>Contato</NavLink>
                </li>
                
                {!user && (
                <>
                <li>
                        <NavLink to="/Register"  className={({isActive})=>(isActive ? styles.active : "")}>Cadastro</NavLink>
                </li>
                <li>
                        <NavLink to="/Login"  className={({isActive})=>(isActive ? styles.active : "")}>Login</NavLink>
                </li>
                
                </>//usa o fragmenst pra poder usar dois elementos
                )}
                {user &&( <>
                <li>
                        <NavLink to="/posts/create"  className={({isActive})=>(isActive ? styles.active : "")}>Novo Post</NavLink>
                </li>
                <li>
                        <NavLink to="/dashboard"  className={({isActive})=>(isActive ? styles.active : "")}>Dashboard</NavLink>
                </li>
                </>)}
            </ul>
        </nav>
        

  )
}

export default Navbar
