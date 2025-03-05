
import AppImg from "components/AppImg"

import { SOCMED } from "../_const"

const FooterBottom = () => {
    return (
        <div className="snuggle-footer__bottom">
            <div className="frame__limit">
                
                <p className="snuggle-footer__bottom-desc">
                    Snuggle Seeker is a non-profit charitable organization that<br/>helps pets across the Philippines to find new homes.
                </p>

                <div className="snuggle-footer__bottom-links">
                    {
                        SOCMED?.map((item, index) => {
                            return <SocMed
                                key={index}
                                item={item}
                            />
                        })
                    }
                </div>

                <p className="snuggle-footer__bottom-copyright">
                    © 2025 Snuggle Seeker. All Rights Reserved.
                </p>

            </div>

            <div className="snuggle-footer__bottom-extra">
                <p>This website contains mock data, which is created for my portfolio. </p>
            </div>
        </div>
    )
}

export default FooterBottom;

const SocMed = ({
    item,
}) => {
    return (
        <div className="snuggle-footer__bottom-link">
            <a 
                href={
                    item?.isMail ? `mailto:${item?.href}` : item?.href
                } 
                target="_blank"
            >
                <AppImg src={item?.icon} extraClass="icon icon--1 img-fit" />
                <AppImg src={item?.icon_2} extraClass="icon icon--2 img-fit" />
            </a>
        </div>
    )
}