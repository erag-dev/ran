
import HomeFeature from "./HomeFeature"

import imgBh01 from "assets/home/bh01.jpg"
import imgBh02 from "assets/home/bh02.jpg"
import imgBh03 from "assets/home/bh03.jpg"

const BH_COLLECTION = [
    imgBh01,
    imgBh02,
    imgBh03,
];

const HomeBH = () => {

    return(
        <HomeFeature 
            extraClass="bh"
            title="Join the thrill of Boss Hunts in Ran Online! Team up with your guild to challenge powerful bosses for <br/>exclusive rewards and rare loot."
            collection={BH_COLLECTION}
            hasOverlay={false}
        />
    )
}

export default HomeBH;
