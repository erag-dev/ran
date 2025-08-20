
import AppImg from "components/AppImg"

import footerBg from "assets/footer-bg.png"
import iconFb from "assets/fb.png"
import iconYt from "assets/yt.png"
import iconDc from "assets/dc.png"

const FooterBody = () => {
    return (
        <div className="ran-footer__body">

            <div className="frame__bg size--cover" style={{backgroundImage: `url(${footerBg})`}}></div>

            <div className="frame__limit">

                <p className="fs--16px">© Copyright 2024 RAN Online Ep.7, All Rights Reserved </p>


                <div className="ran-footer__links">
                    <FooterLink href="https://www.facebook.com/" icon={iconFb} />
                    <FooterLink href="https://www.youtube.com/" icon={iconYt} />
                    <FooterLink href="https://discord.com/" icon={iconDc} />
                </div>

                <p className="ran-footer__credits">Credits to the founder of the game, Min Communications. <br/>This website is created for portfolio only. </p>

            </div>
        </div>
    )
}

export default FooterBody;


const FooterLink = ({
    href,
    icon,
}) => {
    return (
        <div className="ran-footer__link">
            <a href={href} target="_blank">
                <AppImg src={icon} extraClass="img-fit" />
            </a>
        </div>
    )
}