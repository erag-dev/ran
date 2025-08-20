
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import HeaderLogo from "./_ui/HeaderLogo"
import HeaderLinks from "./_ui/HeaderLinks"
import HeaderStatus from "./_ui/HeaderStatus"
import HeaderMenu from "./_ui/HeaderMenu"

import "./_styles.sass"

const Header = ({
    callbackLogin,
}) => {

    const isMobile1000px = useScreenSizeChecker(1000);
    const location = useLocation();

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
            className={`ran-header ${
                scrolling ? 'on--scroll' : ''
            } ${
                location?.pathname === '/' ? 'in--home' : ''
            }`}
        >
            <div className="ran-header__limit">
               
                <HeaderLogo />

                {
                    !isMobile1000px ? (
                        <>
                            {
                                location?.pathname === '/' ? (
                                    <HeaderStatus />
                                ): (
                                    <HeaderLinks
                                        isMenuOpen={false}
                                        callbackLogin={callbackLogin}
                                    />
                                )
                            }

                            <div></div>
                        </>
                    ): (
                        <>
                            <HeaderLinks
                                isMenuOpen={isMenuOpen}
                                callbackLogin={callbackLogin}
                            />
                            
                            <HeaderMenu callbackIsOpen={handleMenu} />
                        </>
                    )
                }

            </div>
        </header>
    )
}

export default Header;