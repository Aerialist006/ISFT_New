import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import './App.css'
import MainPage from './components/MainPage'
import SubjectView from './pages/SubjectView'


function App() {

  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage Main={Home}/>}/>
        <Route path='/materia' element={<MainPage Main={SubjectView}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
