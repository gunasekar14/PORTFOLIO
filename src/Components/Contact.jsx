import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMapMarkedAlt } from 'react-icons/fa'
const Contact = () => {
 
  return (
    <div className='bg-black text-white py-20' id='Contact'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
              <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
              from-green-400 to-blue-500 mb-4'>For More</h1>
               <div className='mb-4 '>
                <FaEnvelope className= "inline-block text-green-400 mr-2"></FaEnvelope>
                <a href="gunakaveri2004.com" className='hover:underline'>gunakaveri2004.com </a>
               </div>
               <div className='mb-4 mt-8'>
                <FaPhone className= "inline-block text-green-400 mr-2"></FaPhone>
                <span>+91 8098576754</span>
               </div>
               <div className='mb-4 mt-8'>
                <FaMapMarkedAlt className= "inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                <span>TIRUTTANI,TAMIL NADU <br /> INDIA .</span>
               </div>
            </div>
           
        </div>
    </div>
</div>
  )
}

export default Contact