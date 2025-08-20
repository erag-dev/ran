
import { SectionNormal } from "components/Section"
import TopupSteps from "./TopupSteps"
import TopupChannels from "./TopupChannels"

import bgLightning from "assets/lightning.png"

import {
    HOW_DONATE,
    GCASH_INFOS,
} from "../../_const"

const TopupMain = () => {

    return(
        <SectionNormal 
            extraClass="ran-topup__main"
            bg={bgLightning}
        >

            <TopupSteps steps={HOW_DONATE} />

            <TopupChannels list={GCASH_INFOS} />

        </SectionNormal>
    )
}

export default TopupMain;
