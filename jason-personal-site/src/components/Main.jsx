import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    console.log("loading image");
    // Main component rendering the hero section with animation and social icons
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="heroBlackAbstract.jpg" alt="HeroImg" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'> {/*This is the background overlay gradient*/}
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jason</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
                        <TypeAnimation
                            sequence={['Developer',
                                2000,
                                'Engineer',
                                2000,
                                'Problem Solver',
                                2000,
                                'Tree Hugger',
                                2000,
                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block', fontSize: '1em', fontWeight: 'bold', paddingLeft: '5px'}}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] space-x-4'> {/*Social icons - change space-x-4 to w-full if adding more icons*/}
                        <FaGithub className='cursor-pointer' size={20}/>
                        <FaLinkedinIn className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

