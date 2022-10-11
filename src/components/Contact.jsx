import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>

            <form method='POST' action="https://getform.io/f/2e87f58d-3f14-41d6-b700-0379469f9545" className='flex flex-col max-w-[600px] w-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - kevinsantiago2406@hotmail.com</p>
                </div>

                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 transition ease-in duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

            <div className='mt-4 flex justify-around w-full text-gray-300 mb-8 xl:hidden'>
                <a href='https://www.linkedin.com/in/kevin-santiago-avila-abella-2749781b7/'>
                    <FaLinkedin size={30} />
                </a>
                <a href='https://github.com/AvilaKevin'>
                    <FaGithub size={30} />
                </a>
                <a href='mailto:kevinsantiago2406@hotmail.com'>
                    <HiOutlineMail size={30} />
                </a>
                <a href='./Frontend Kevin Santiago 1001173247.docx' download>
                    <BsFillPersonLinesFill size={30} />
                </a>
            </div>

        </div>
    )
}

export default Contact