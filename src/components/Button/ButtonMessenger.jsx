
import AppImg from "components/AppImg"

import iconMess from "assets/messenger.png"

const ButtonMessenger = ({
    extraClass,
}) => {
    return (
        <div 
            className={`${extraClass ? extraClass : ''} btn btn--messenger`}
        >   
            <AppImg src={iconMess} />
            <p className="btn__text">CHAT US ON MESSENGER</p>
        </div>
    )
}

export default ButtonMessenger;