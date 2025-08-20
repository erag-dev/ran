
import { ButtonNormal } from "components/Button"

const SupportContentsBox = () => {
    return(
        <div className="ran-support__contents-box">

            <div>
                <h2 className="frame__header fs--20px">Sign in to your account</h2>
                <div className="frame__desc">
                    <p>View your tickets and manage your account</p>
                </div>
            </div>
            
            <ButtonNormal 
                isDiv={true}
                btnLbl="Sign In"
            />

        </div>
    )
}

export default SupportContentsBox;