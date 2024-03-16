import React from 'react'
import img1 from "../../src/assets/img/s2.png"
import img2 from "../../src/assets/img/html.png"
import img3 from "../../src/assets/img/css.png"
import img4 from "../../src/assets/img/node.png"
import img5 from "../../src/assets/img/mongodb.png"
import img6 from "../../src/assets/img/react.png"


function Home() {
  return (
    <>
    <div className='md:flex  flex flex-col ml-20 md:pt-20'>
      <div className='md:w-[400px] w-[330px] h-[280px]  md:h-[300px]  rounded-md bg-gradient-to-tr  from-red-400 to-gray-400  '>
      <h1 className=" md:text-xl font-bold pt-10 pl-[20%]">Hi, I'm Suad Salad Osman</h1>
      <p className="text-white font-bold pt-6 md:pl-12 pl-5">
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. <span className='text-black'> <br/> Reach out if you'd like to learn more!</span>
        </p>

        <div className='flex  md:pt-10 pl-16 pt-3'>
        <img src={img2} alt="" className='md:w-[50px] w-[40px] h-[40px] md:h-[50px]' />
        <img src={img3} alt="" className='md:w-[50px] w-[40px] h-[40px] md:h-[50px]' />
        <img src={img4} alt="" className='md:w-[50px] w-[40px] h-[40px] md:h-[50px]' />
        <img src={img5} alt="" className='md:w-[50px] w-[40px] h-[40px] md:h-[50px]' />
        <img src={img6} alt="" className='md:w-[50px] w-[40px] h-[40px] md:h-[50px]' />

        </div>

      </div>
         {/* picture */}
      <div className='md:w-[300px] md:ml-[500px] w-[300px]  absolute md:top-[140px] top-[420px] flex md:flex-col'>
     <img src={img1} alt="" />
      </div>
    </div>

  
    </>
  )
}

export default Home