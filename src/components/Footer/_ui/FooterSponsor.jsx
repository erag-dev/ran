
import { useNavigate } from "react-router-dom"

import Button from "components/Button"

const FooterSponsor = () => {

    const navigate = useNavigate();

    const handleRedirect = () => navigate('/adopt');

    return (
        <div className="snuggle-footer__sponsor">
            <div className="frame__limit">
                
                <div className="frame__desc">
                    <p>
                        Can’t adopt but want to help? Your sponsorship helps towards food, vaccinations, medical care, spaying/neutering and<br/> 
                        toys for your sponsored friend and allows us to help even more animals.
                    </p>
                </div>

                <Button 
                    isDiv={true}
                    onClick={() => handleRedirect()}
                    btnLbl="View The Pets You Can Help As a Sponsor"
                    extraClass="align--c"
                />

            </div>
        </div>
    )
}

export default FooterSponsor;