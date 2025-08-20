
import { useNavigate } from "react-router-dom"

import AppImg from "components/AppImg"
import { ButtonNormal } from "components/Button"

import img404 from "assets/404.png"

import "./_styles.sass"

const AboutPage = () => {

    const navigate = useNavigate();

    const handleGoBack = () => navigate(`/`);

    return(
        <div className="error404">

            <div className="error404__inner">
                <AppImg src={img404} />

                <ButtonNormal 
                    isDiv={true}
                    btnLbl="BACK TO HOME"
                    onClick={() => handleGoBack()}
                />
            </div>

        </div>
    )
}

export default AboutPage;