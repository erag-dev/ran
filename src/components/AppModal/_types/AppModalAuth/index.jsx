
import { AppModalDefault } from "components/AppModal"
import { ButtonNormal } from "components/Button"

// import bgAuth from "assets/bg-auth-2.png"
// import bgAuth from "assets/bg-auth-2.png"
// import bgLightning from "assets/lightning.png"

import "./_styles.sass"

const AppModalAuth = ({
    modalState,
    callbackIsOpen,
}) => {

    return (
        <AppModalDefault
            extraClass="modal--auth"
            modalSize="size--m"
            modalState={modalState}
            callbackIsOpen={callbackIsOpen}
        >

            {/* <div className="frame__bg size--cover" style={{backgroundImage: `url(${bgLightning})`}}></div> */}

            <div className="modal--auth__inner">

                <h2 className="frame__header">PLAY RAN ONLINE EP.7 FOR FREE</h2>
                <h4 className="frame__header fs--20px">Explore, Battle, and Conquer</h4>

                <div className="modal--auth__btns">

                    <div>
                        <p className="fs--18px">I don’t have an account yet</p>
                        <ButtonNormal 
                            isDiv={true}
                            btnLbl="CREATE AN ACCOUNT"
                        />
                    </div>

                    <div>
                        <p className="fs--18px">I already have an account</p>
                        <ButtonNormal 
                            isDiv={true}
                            btnLbl="LOGIN NOW"
                        />
                    </div>

                </div>

            </div>
            
        </AppModalDefault>
    )
}

export default AppModalAuth;