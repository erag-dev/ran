
import AppImg from "components/AppImg"
import { SectionBox } from "components/Section"

import avatar from "assets/fs.png"

const TopupFeaturedText = () => {

    return(
        <SectionBox extraClass="ran-topup__featuredtext">

            <AppImg src={avatar} />
            
            <h2>Processing Hours: Available daily from <span>8:00 AM</span> to <span>2:00 AM</span> (GMT +8)</h2>

        </SectionBox>
    )
}

export default TopupFeaturedText;