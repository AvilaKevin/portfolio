import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I’m Kevin, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I’m a Front-end developer passionate about the world of technology, eager to learn more every day in order to break down the walls that stand in the way that life offers me, I like to work in a team though I can work individually without affected my performance, I adapt easily to changes and I consider myself a very creative person.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;