
import useScreenSizeChecker from "hooks/useScreenSizeChecker"

import { SectionNormal } from "components/Section"

import HeaderLinks from "components/Header/_ui/HeaderLinks"
import HomeBoardAnnouncement from "./HomeBoardAnnouncement"
import HomeBoardGuides from "./HomeBoardGuides"
import HomeBoardWars from "./HomeBoardWars"
import HomeBoardReq from "./HomeBoardReq"
import HomeBoardBtns from "./HomeBoardBtns"

import boardBg from "assets/home/bg-f2.png"
// import imgRan from "assets/ran.png"


const HomeBoard = ({
    callbackDl,
    callbackLogin,
}) => {

    const isMobile1000px = useScreenSizeChecker(1000);

    return(
        <SectionNormal 
            extraClass="ran-home__board overflow--visible"
            bg={boardBg}
        >

            {
                !isMobile1000px ? (
                    <>
                        <HeaderLinks 
                            isMenuOpen={false}
                            isInSection={true}
                            callbackLogin={callbackLogin}
                        />

                        <div className="ran-home__board-groups groups--1">

                            <HomeBoardAnnouncement />

                            <HomeBoardGuides />

                            <HomeBoardWars />

                        </div>

                        <div className="ran-home__board-groups groups--2">

                            <HomeBoardReq />

                            <HomeBoardBtns />

                        </div>
                    </>
                ): (
                    <>
                        <div className="ran-home__board-groups groups--1">

                            <HomeBoardAnnouncement />

                            <HomeBoardGuides />

                        </div>

                        <div className="ran-home__board-groups groups--2">

                            <HomeBoardReq />
{/* 
                            <HomeBoardWars />

                            <HomeBoardBtns /> */}

                        </div>
                    </>
                )
            }
            
            

        </SectionNormal>
    )
}

export default HomeBoard;