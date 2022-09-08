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
                        <p>Hi. I'm Kevin, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lacus elit, tincidunt condimentum metus rutrum et. In suscipit, tellus ac imperdiet viverra, ante ligula mattis urna, ut lacinia neque eros sit amet mauris. Integer iaculis aliquam ante vel ullamcorper. Nulla lobortis est neque, in varius magna elementum non. Maecenas a risus ac est ultrices molestie nec id justo. Cras in dictum ex. Mauris dolor tortor, rhoncus et rutrum vel, tempus sed nisi. Mauris sed urna vehicula, faucibus ipsum id, dignissim urna. Nunc velit ante, aliquet eget ultrices id, rutrum a urna. Nulla viverra justo tortor, a congue ante tristique a.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;