import React from 'react'
import Styles from './About.module.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className={Styles.about}>
      <h1>About</h1>
      <span>Blog</span>
      <p>Projeto desenvolvido em Reactjs utilizando o banco de dados Mongodb e firebase</p>

    <Link to="/posts/create" className='btn'>criar post</Link>
    

    </div>


  )
}

export default About
