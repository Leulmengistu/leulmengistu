import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import {About, Contact,Experience, Feedbacks,Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import toast, { Toaster } from 'react-hot-toast';
function App() {


  return (
   <BrowserRouter>
    <div className='relative z-0 bg-primary'>
       <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
       </div>
       <About/>
       <Experience />
       <Tech />
       <Works />
       <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
       </div>
       <Toaster />
    </div>
   </BrowserRouter>
  )
}

export default App
