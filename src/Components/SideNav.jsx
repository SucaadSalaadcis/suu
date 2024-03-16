import {useState} from 'react'
import { NavLink } from 'react-router-dom'

function SideNav({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [Qari, setQari] = useState(false);


    const handleOpen =()=> {
     setIsOpen(true)
     setQari(true)
    }
    const handleClose = () => {
     setIsOpen(false)
     setQari(false)
    }

  return (
    <div>

    <div style={{width: isOpen == true ? "100px" : ""}} className='transition-all duration-700  bg-gradient-to-tr  from-red-300 to-gray-400 fixed h-screen w-[18%]  overflow-hidden border-r-2 border-gray-300 '>
    
    <i onClick={handleOpen}  class="fa-solid fa-xmark  text-white text-4xl ml-[200px] pt-5 " ></i>
    <i onClick={handleClose} class="fa-solid fa-bars text-white text-3xl  hidden ml-[40px]"  style={{display: isOpen == true? "block" : "none"}} ></i>
       

  <div className='ml-12 mt-10 text-2xl flex flex-col gap-12'>
   <NavLink to={"/"} className='cursor-pointer'> <i  class="fa-brands fa-microsoft text-white"  ></i> <span style={{display: Qari == true? "none" : "inline" , fontWeight:'bold'}} className='text-black'> Home </span></NavLink>
   <NavLink to={"/about"} className='cursor-pointer '> <i class="fa-solid fa-bag-shopping text-white" ></i> <span style={{display: Qari == true? "none" : "inline", }}> About Me </span></NavLink>
   <NavLink to={"/projects"} className='cursor-pointer '> <i class="fa-brands fa-product-hunt text-white" ></i> <span style={{display: Qari == true? "none" : "inline"}}> Projects </span></NavLink>
   <NavLink to={"/resume"} className='cursor-pointer '> <i class="fa-solid fa-image-portrait text-white" ></i > <span style={{display: Qari == true? "none" : "inline"}}> Resume </span></NavLink>
   <NavLink to={"/contact"} className='cursor-pointer '> <i class="fa-solid fa-table-cells text-white" ></i> <span style={{display: Qari == true? "none" : "inline"}}> Contact Me </span></NavLink>
    </div>
    </div>
    <div style={{marginLeft: isOpen === true ? "200px" : ""}} id='main' className='ml-[18%] transition-all duration-500 pt-16' > {children} </div>
    </div>
  )
}

export default SideNav