import React from 'react';
import Statup from "../assets/download2.jpeg";
import loginpageImage from "../assets/download.jpeg";

const projects=[
  {
    id:1,
    name:"TNstatup",
    technologies:"React & Tailwind CSS",
    image:Statup ,
    github:"https://github.com/gunasekar14/statup-registration.git"

  },
  {
    id:2,
    name:"Collecting details",
    technologies:"React & Tailwind CSS",
    image:loginpageImage,
    github:"https://github.com/gunasekar14/project_1.git"

  },
  {
    id:3,
    name:"Website design",
    technologies:"React & Tailwind CSS",
    image:loginpageImage,
    github:"https://github.com/gunasekar14"

  },
];

const Projects = () =>{

  return (
    <div className='bg-black text-white py-20' id='Project'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
         <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-8'>
          { projects.map(Project =>(
            <div key={Project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
            transform transition-transform duration-300 hover:scale-105p, '>
              <img src={Project.image } alt={Project .name} className='"rounded-lg mb-4
              w-full h-48 boject-cover ' />
              <h3 className='text-2xl font-bold mb-2'>{Project.name}</h3>
              <p className='text-gray-400 mb-4'>{Project.technologies}</p>
              <a href={Project.github} className='inline-block bg-graduent-to-r
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
            </div>
          ))}
         </div> 
      </div>
    </div>
  )
}

export default Projects