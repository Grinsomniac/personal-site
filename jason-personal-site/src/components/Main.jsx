import React from 'react';
import heroImage from '../assets/imgSrc/hero.jpg';

const Main = () => {
    console.log("loading image");
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="heroBlackAbstract.jpg" alt="HeroImg" />
        </div>
    );
}

export default Main;

