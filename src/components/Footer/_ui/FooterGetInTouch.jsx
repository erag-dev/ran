
import { useNavigate } from "react-router-dom"

import Button from "components/Button"

const FooterGetInTouch = () => {

    const navigate = useNavigate();

    const handleRedirect = () => navigate('/contact');

    return (
        <div className="snuggle-footer__getintouch">
            <div className="frame__limit">
                
                <div className="frame__desc">
                    <p>
                        We’re excited to hear from fellow animal lovers and advocates!<br/>
                        If you find our lines busy, don’t worry—we’ll respond as quickly as we can.
                    </p>
                </div>

                <Button 
                    isDiv={true}
                    onClick={() => handleRedirect()}
                    btnLbl="Get In Touch"
                    extraClass="align--c"
                />

            </div>
        </div>
    )
}

export default FooterGetInTouch;