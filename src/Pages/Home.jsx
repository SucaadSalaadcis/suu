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
    <div className='flex ml-20 pt-20'>
      <div className='w-[400px] h-[300px] rounded-md mt-0 bg-gradient-to-tr  from-red-400 to-gray-400  '>
      <h1 className=" text-xl font-bold pt-10 pl-[20%]">Hi, I'm Suad Salad Osman</h1>
      <p className="text-white font-bold pt-6 pl-12">
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. <span className='text-black'> <br/> Reach out if you'd like to learn more!</span>
        </p>

        <div className='flex pt-10 pl-16'>
        <img src={img2} alt="" className='w-[50px] h-[50px]' />
        <img src={img3} alt="" className='w-[50px] h-[50px]' />
        <img src={img4} alt="" className='w-[50px] h-[50px]' />
        <img src={img5} alt="" className='w-[50px] h-[50px]' />
        <img src={img6} alt="" className='w-[50px] h-[50px]' />

        </div>

      </div>
         {/* picture */}
      <div className='w-[480px] ml-[500px] absolute top-[140px]'>
     <img src={img1} alt="" />
      </div>
    </div>

  
    </>
  )
}

export default Home