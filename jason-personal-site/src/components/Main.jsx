import React from 'react';
import heroImage from '../assets/imgSrc/hero.jpg';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    console.log("loading image");
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="heroBlackAbstract.jpg" alt="HeroImg" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <h1>I'm Jason</h1>
                <h2>I'm a 
                    <TypeAnimation
                        sequence={['Developer',
                            2000,
                            'Engineer',
                            2000,
                            'Problem Solver',
                            2000,
                            'Planet Enthusiast',
                            2000,
                        ]}
                        wrapper='div'
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block', fontSize: '1em', fontWeight: 'bold', paddingLeft: '5px'}}
                    />
                </h2>
            </div>
        </div>
    );
}

export default Main;

