import React,{ useEffect } from 'react'
//import Section
import Home from './sections/index'

// import Navbar
import Nav from './Navbar/Nav'
//import Footer
import Footer from './Footer/Footer'
//import ScrollUp
import ScrollUp from './ScrollUp/ScrollUp'
// Roter Dom
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () =>{
 
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ShowMenu/main.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/RemoveMenuMobile/main.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ChangeBackgroundHeader/main.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ShowScrollUp/main.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/ScrollSectionActiveLink/main.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/Theme/mani.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  // scrollreveal
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/Animation/scrollreveal.min.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
  useEffect(()=>{
    const script = document.createElement('script')
    script.src='./Animation/Animation/main.js';
    script.async=true;
    document.body.appendChild(script)
    return()=>{
      document.body.removeChild(script)
    }
  },[])
 
  return (
<Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    <ScrollUp/>

</Router>
  )
}
export default App;
