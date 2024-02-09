import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import { Route,Routes } from 'react-router-dom'
import Register from './components/Register.jsx'
function App() {
 

  return (
   <Routes>
    <Route exact path='/' element={<Header/>}/>
    <Route exact path='/register' element={<Register/>}/>
   </Routes>
  )
}

export default App