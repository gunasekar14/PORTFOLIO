import React from 'react';

function Footer() {
    const config = {
        email: "https://gunakaveri2004@gmail.com",
    }
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md
            :mb-0'>
                        <h3 className='text-gray-400 text-3xl'>Guna</h3>
                        <p>Full-Stack Developer speacilized in Website Frentend and Backend</p>
                    </div>
                    <div className='flex-1 w-full'>
                        <h1 className='pl-3'>FOR CONTACT</h1>
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-10
                    py-2 rounded-lg'>
                            <a href="mailto:gunakaveri2004@gmail.com" target='_blank' className='hover:underline'>Contact</a>
                        </button>
                    </div>
                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row
        justify-between items-center'>
                    <p className='text-gray-400'>
                        &copy;{new Date().getFullYear()}
                    </p>
                    <div className='flex space-x-4 my-4 md:my-0'>

                        <div classNameflex space-x-4>
                            <a href="#" className='text-gray-400 hover:text-white'>
                                privacy
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white'>
                                Terms of Services
                            </a>
                        </div>
                    </div>
                </div>




            </div>
        </footer>

    )
}

export default Footer