
import { useState, useEffect } from "react"

import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import HeaderLogo from "./_ui/HeaderLogo"
import HeaderLinks from "./_ui/HeaderLinks"
import HeaderMenu from "./_ui/HeaderMenu"

import "./_styles.sass"

const Header = () => {

    const isMobile1000px = useScreenSizeChecker(1000);

    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => { // cleanup function to remove the event listener when the component is unmounted
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(!isMobile1000px) setIsMenuOpen(false);
    }, [isMobile1000px]);

    const handleScroll = () => {
        if(window.scrollY > 50) {
            setScrolling(true); 
        } else {
            setScrolling(false);
        }
    };

    const handleMenu = (state) => setIsMenuOpen(state)

    return(
        <header 
            className={`snuggle-header ${
                scrolling ? 'on--scroll' : ''
            }`}
        >
            <div className="snuggle-header__limit">
               
                <HeaderLogo />

                <HeaderLinks isMenuOpen={isMenuOpen} />

                {
                    isMobile1000px
                    ? <HeaderMenu callbackIsOpen={handleMenu} />
                    : null
                }

            </div>
        </header>
    )
}

export default Header;