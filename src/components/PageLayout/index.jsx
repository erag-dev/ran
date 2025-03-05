
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import usePageTitle from "hooks/usePageTitle"

import AppLoader from "components/AppLoader"
import Header from "components/Header"
import Footer from "components/Footer"
import { AppModalLetter } from "components/AppModal"

import "./_styles.sass"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const PageLayout = ({
    pageClass,
    pageName,
    isAdopt,
    isLoading,
    showSponsor,
    hideFooterEdge,
    hideGetInTouch,
    callbackIsAdopt,
    children
}) => {

    const location = useLocation();
    const container = useRef();

    usePageTitle(`${pageName}`);

    /**
     * @scroll_top
     * => ensure that the top of the page is shown when page changes..
     */
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location]);

    /**
     * @animate
     * => fade in each element
     */
    useGSAP(() => {
        const targetElems = gsap.utils.toArray('.frame__header');
        targetElems.forEach((elem) => {
            gsap.to(elem, {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: elem,
                    triggerHook: 0.2,
                }                
            })
        });
    }, { scope: container });

    return <>

        <Header />

        <main 
            className={`${pageClass} snuggle-page`}
            ref={container}
        >

            {children}

            {
                isLoading && <AppLoader />
            }

        </main>

        <Footer 
            hideEdge={hideFooterEdge}
            hideGetInTouch={hideGetInTouch}
            showSponsor={showSponsor}
        />


        <AppModalLetter 
            modalState={isAdopt}
            callbackIsOpen={callbackIsAdopt}
        />
    </>
}

export default PageLayout;