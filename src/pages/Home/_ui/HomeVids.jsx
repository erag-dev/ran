
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"

import iconPlay from "assets/play-circle-outline.png"
import imgVid01 from "assets/home/vid01.jpg"
import imgVid02 from "assets/home/vid02.jpg"
import imgVid03 from "assets/home/vid03.jpg"
import imgVid04 from "assets/home/vid04.jpg"

const HomeVids = () => {

    return(
        <SectionNormal 
            extraClass="ran-home__vids"
            bg={null}
        >

            <VidBox src={imgVid01} />
            <VidBox src={imgVid02} />
            <VidBox src={imgVid03} />
            <VidBox src={imgVid04} />

        </SectionNormal>
    )
}

export default HomeVids;

const VidBox = ({
    src,
}) => {
    return(
        <div className="ran-home__vid">
            <AppImg src={src} />
            
            <div className="ran-home__vid-play">
                <AppImg src={iconPlay} />
            </div>
        </div>
    )
}