
import AppImg from "components/AppImg"
import { SectionBox } from "components/Section"

import avatar from "assets/archer.png"

const SupportFeaturedText = () => {

    return(
        <SectionBox extraClass="ran-support__featuredtext">

            <AppImg src={avatar} />
            
            <h2>Assistance available daily from <span>8:00 AM</span> to <span>2:00 AM</span> (GMT +8)</h2>

        </SectionBox>
    )
}

export default SupportFeaturedText;