import React from 'react'
import img1 from "../../src/assets/img/s2.png"


function About() {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto max-w-4xl p-8 mt-5 md:mt-24">
    <div className="w-full md:w-1/2 lg:w-1/3 p-4  ">
      <img src={img1} alt="About Us" className="rounded-lg shadow-md " />
    </div>
    <div className="w-full md:w-1/2 lg:w-2/3 pl-10 bg-gradient-to-tr  text-white rounded-2xl  from-red-800 to-gray-400 ">
      <h1 className="text-4xl font-bold mb-3 text-white">About me</h1>
      <div className="text-lg text-white">
     <p>Birthday : 10 sep </p> 
    <p> City : Mogadisho</p>
     <p>  Degree : CS </p>
     <p>  Email : sususalax393@gmail.com </p>
     <p> Phone : +252 619 52 73 51 </p>
      </div>
    </div>
  </div>
  )
}

export default About