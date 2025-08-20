
import { ButtonNormal } from "components/Button"
import HomeBoardGroup from "./HomeBoardGroup"

const HomeBoardBtns = ({
    callbackDl,
}) => {
    return (
        <HomeBoardGroup
            extraClass="btns"
            title={null}
        >

            <div>
                <ButtonNormal 
                    isDiv={true}
                    onClick={() => callbackDl(true)}
                    btnLbl="DOWNLOAD GAME CLIENT"
                />
            </div>
            
            <div>
                <ButtonNormal 
                    isDiv={true}
                    onClick={() => false}
                    btnLbl="INSTALLATION GUIDE"
                    extraClass="white"
                />
            </div>

        </HomeBoardGroup>
    )
}

export default HomeBoardBtns;
