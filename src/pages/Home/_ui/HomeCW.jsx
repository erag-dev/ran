
import HomeFeature from "./HomeFeature"

import imgCw01 from "assets/home/cp01.jpg"
import imgCw02 from "assets/home/cp02.jpg"
import imgCw03 from "assets/home/cp03.jpg"

const CW_COLLECTION = [
    imgCw01,
    imgCw02,
    imgCw03,
];

const HomeCW = () => {

    return(
        <HomeFeature 
            extraClass="cw"
            title="Unite and Prevail: Seize Your Glory on the Conqueror's Path!"
            collection={CW_COLLECTION}
            hasOverlay={false}
        />
    )
}

export default HomeCW;
