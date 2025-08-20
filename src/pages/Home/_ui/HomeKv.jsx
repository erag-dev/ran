
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"
import { ButtonNormal } from "components/Button"

import kvBg from "assets/home/bg-kv.png"
import imgRan from "assets/ran.png"

const HomeKv = ({
    callbackDl,
}) => {

    return(
        <SectionNormal 
            extraClass="ran-home__kv"
            bg={kvBg}
        >

            <div className="ran-home__kv-texts">
                <AppImg src={imgRan} extraClass="ran-home__kv-ran" />

                <h2 className="frame__header">Episode 7: 230 Max Level / 207 Last Skill</h2>

                <div className="frame__desc">
                    <p>
                        Welcome RANatics! Dive into RAN Online Ep.7, where you can play for free and earn as you go. Choose from 6 balanced classes, enjoy low EXP and drop rates, and team up for epic party leveling. With two channels to explore (Non-PK and PK), you’ll find the perfect setting for your adventure!
                    </p>
                </div>

                <ButtonNormal 
                    isDiv={true}
                    onClick={() => callbackDl(true)}
                    btnLbl="DOWNLOAD GAME CLIENT"
                />
            </div>

        </SectionNormal>
    )
}

export default HomeKv;