import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



function App() {
  

  return (
    <>
    <div>
      
      <Router>
        
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<div><About/></div>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          </Routes>
          
           <Footer />
      </Router>
      
    
    </div>
    
      
    </>
  )
}

export default App
