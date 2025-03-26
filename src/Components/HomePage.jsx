import React from 'react';

import Home from './Home';
import About from './About';

import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  return (
   <>
  
   <div className='container ' >
     
     <Home/>
     <About/>
     <Services/>
     <Skills/>
     <Projects/>
    <Contact/>
  
  
   </div>

   
   
   </>
  );
}

export default HomePage;

