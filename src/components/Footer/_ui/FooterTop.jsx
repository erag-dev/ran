
import AppImg from "components/AppImg"

import footerEdge from "assets/footer-pets.png"


const FooterTop = ({
    hideEdge,
}) => {
    return (
        <div className={`snuggle-footer__top ${
            hideEdge ? 'is--hide' : ''
        }`}>
            {
                !hideEdge ? (
                    <AppImg src={footerEdge} extraClass="snuggle-footer__top-edge" />
                ): null
            }
            
            <div className="snuggle-footer__limit frame__limit">
                
                <h2 className="frame__header">
                    We are dedicated to weaving a tapestry of love and hope,<br/>
                    where every rescued pet finds their <span>fur-ever</span> home and <span>warm</span> embrace.
                </h2>

            </div>
        </div>
    )
}

export default FooterTop;