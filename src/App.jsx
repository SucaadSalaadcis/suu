import {Route, Routes, } from 'react-router-dom'
import SideNav from './Components/SideNav'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'


function App() {
  return (
    <SideNav> 
      {/* all routes */}
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/projects' element= {<Projects/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/resume' element= {<Resume/>}/>
 
    </Routes>
    </SideNav>
  )
}

export default App