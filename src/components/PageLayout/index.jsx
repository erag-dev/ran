
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import usePageTitle from "hooks/usePageTitle"

import AppLoader from "components/AppLoader"
import Header from "components/Header"
import Footer from "components/Footer"
import MovingDots from "components/MovingDots"
import { AppModalAuth } from "components/AppModal"

import "./_styles.sass"


const PageLayout = ({
    pageClass,
    pageName,
    isLogin,
    isDl,
    isLoading,
    callbackIsLogin,
    callbackIsDl,
    children
}) => {

    const location = useLocation();

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    usePageTitle(`${pageName}`);

    /**
     * @scroll_top
     * => ensure that the top of the page is shown when page changes..
     */
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location]);

    /**
     * @auth
     */
    useEffect(() => {
        setIsAuthOpen(isLogin);
    }, [isLogin]);

    const handleModal = (state) => {
        setIsAuthOpen(state);
        callbackIsLogin(state);
    }

    return <>

        <Header 
            callbackLogin={setIsAuthOpen}
        />

        <main 
            className={`${pageClass} ran-page`}
        >

            {children}

            {
                isLoading && <AppLoader />
            }

            <MovingDots />

        </main>

        <Footer />


        <AppModalAuth 
            modalState={isAuthOpen}
            callbackIsOpen={handleModal}
        />
    </>
}

export default PageLayout;