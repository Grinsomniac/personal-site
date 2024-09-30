import React, {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log('nav state changed')
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} />
        {
            nav ? (
                <div>Nav on</div>
            )
            : (
                <div>Nav off</div>
            )

            
        }
    </div>
  );
};

export default Sidenav