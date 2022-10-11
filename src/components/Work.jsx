import React from 'react'
import weatherApp from '../assets/work/WeatherApp.png';
import QrAccess from '../assets/work/QrAccess.png';
import ToDo from '../assets/work/ToDo.png';
import MathTools from '../assets/work/MathTools.png';


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* TITLE CONTAINER */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* GRID ITEMS */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* GRID weatherApp */}
                    <div style={{ background: `url(${weatherApp})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex items-end lg:justify-center lg:items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='hidden lg:block lg:opacity-0 lg:group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt8 text-center'>
                                <a href='https://avilakevin.github.io/wheather_app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/AvilaKevin/wheather_app'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                        {/* MOVILE BUTTONS

                        <div className='bg-[#0a192f] lg:hidden flex justify-around w-full'>
                            <button className=' text-white border-2 px-6 py-3 flex items-center bg-pink-600 border-pink-600 rounded-md'>Demo</button>
                            <button className=' text-white border-2 px-6 py-3 flex items-center bg-pink-600 border-pink-600 rounded-md'>Demo</button>
                        </div> */}

                    </div>

                    {/* GRID QrAccess */}
                    <div style={{ background: `url(${QrAccess})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt8 text-center'>
                                <a href='https://github.com/AvilaKevin/qr-access-validator'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* GRID ToDo */}
                    <div style={{ background: `url(${ToDo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt8 text-center'>
                                <a href='https://avilakevin.github.io/To-Do-List/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/AvilaKevin/To-Do-List'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* GRID MathTools */}
                    <div style={{ background: `url(${MathTools})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt8 text-center'>
                                <a href='https://avilakevin.github.io/Platzi-Curso-practico-js/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/AvilaKevin/Platzi-Curso-practico-js'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Work