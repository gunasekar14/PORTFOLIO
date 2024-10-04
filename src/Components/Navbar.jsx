import React from 'react'
function Navbar() {
 
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>GUNASEKAR </div>
            <div className='space-x-6'>
            < a href='#home'className='hover:text-gray-400'>Home</a>
            < a href='#about'className='hover:text-gray-400'>About Me</a>
            < a href='#Project'className='hover:text-gray-400'>Project</a>
            < a href='#Service'className='hover:text-gray-400'>Certification</a>
            < a href='#Contact'className='hover:text-gray-400'>Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar