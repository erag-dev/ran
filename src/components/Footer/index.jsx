
import FooterTop from "./_ui/FooterTop"
import FooterGetInTouch from "./_ui/FooterGetInTouch"
import FooterSponsor from "./_ui/FooterSponsor"
import FooterBottom from "./_ui/FooterBottom"

import "./_styles.sass"

const Footer = ({
    hideEdge,
    hideGetInTouch,
    showSponsor,
}) => {
    return(
        <footer className="snuggle-footer">
            
            <FooterTop hideEdge={hideEdge} />

            {
                !hideGetInTouch ? (
                    <FooterGetInTouch />
                    
                ): (

                    showSponsor 
                    ? <FooterSponsor />
                    : null
                )
            }
            
            <FooterBottom />

        </footer>
    )
}

export default Footer;