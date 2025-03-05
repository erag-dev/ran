
import { useNavigate } from "react-router-dom"

import { SectionWithEdges } from "components/Section"
import Button from "components/Button"

import "./_styles.sass"

const SectionPetflation = () => {

    const navigate = useNavigate();

    const handleRedirect = () => navigate('/donate');

    return(
        <SectionWithEdges extraClass="snuggle-petflation">
            
            <h2 className="frame__header">
                Not ready to adopt but still want to <span>help</span>?<br/>
                Help us combat <span>Petflation</span>!
            </h2>

            <div className="frame__desc">
                <p>
                    With rising pet food costs, we need your support more than ever to continue providing for the animals in our care. Your contributions help ensure that every furry friend receives the nutrition and love they deserve.
                </p>
            </div>

            <div className="snuggle-petflation__btns">
                <Button 
                    isDiv={true}
                    onClick={() => handleRedirect(true)}
                    btnLbl="Sponsor"
                    extraClass="as--link xl"
                />

                <Button 
                    isDiv={true}
                    onClick={() => handleRedirect(true)}
                    btnLbl="Donate"
                    extraClass="as--link xl pink"
                />
            </div>
           
        </SectionWithEdges>
    )
}

export default SectionPetflation;
