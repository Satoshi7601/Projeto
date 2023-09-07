
import './App.css';

import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';//funçaõ que mapeia a autenticação do usuario

//hokes
import { useState, useEffect } from 'react';
import { useAuthentication } from './Hooks/useAutentication';


//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

//components 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Cadastro/Register';
import Login from './pages/Login/Login';

//context
import { AuthProvider } from './Context/AuthContext';
import CreatPost from './pages/CreatPost/CreatPost';
import Dashboard from './pages/dashbord/Dashboard';
function App() {

  const [user,setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{

    onAuthStateChanged(auth, (user) =>{

      setUser(user)
    })

  },[auth])

  if(loadingUser){

    return<p>Usuario Carregando...</p>
  }

  return (
    <div className="App">
      
      <AuthProvider value={{user}}>
      <BrowserRouter>
    
     <Navbar/>
     <div className='container'>
        <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Login' element={!user ? <Login/> : <Navigate to="/Login"/>}></Route>
        <Route path='/Register' element={!user ? <Register/> : <Navigate to="/"/>}></Route>
        <Route path='/post/creat' element={user ? <CreatPost></CreatPost> : <Navigate to="/"></Navigate>}></Route>
        <Route path='/dashboard' element={user ? <Dashboard></Dashboard> : <Navigate to="/"></Navigate>}></Route>
        </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
     </AuthProvider>
    
    </div>
  );
}

export default App;
