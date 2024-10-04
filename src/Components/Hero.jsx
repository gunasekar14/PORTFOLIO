import React from 'react'
import HeroImage from '../assets/pic1.jpg'
import { AiOutlineLinkedin,AiOutlineGithub,AiOutlineFacebook } from "react-icons/ai";
function Hero() {
  const config ={
social:{
  
  Github:"https://github.com/gunasekar14",
  Linkedin:"https://www.linkedin.com/in/gunasekar-k007",
  }
  }
  
  
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-5 w-48 rounded-full object-cover transform transition-transform
        duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'M{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>GUNA</span>
            ,Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 '>
            I am specialized in buildind and responsive web applications
        </p>
        <div className='mt-8 space-x-4'>
           
            <div className=' justify-center flex py-10 '>
              <a href={config.social.Linkedin} className=' flex pr-5  hover:scale-105 px-4 py-2 rounded-full'> <AiOutlineLinkedin size={50} /></a>
              <a href={config.social.Github} className='pr-5  hover:scale-105 px-4 py-2 rounded-full' > <AiOutlineGithub size={50}/></a>
              <a href="#" className='pr-5  hover:scale-105 px-4 py-2 rounded-full'> <AiOutlineFacebook size={50} /></a>
              </div>
        </div>
    </div>
  )
}

export default Hero