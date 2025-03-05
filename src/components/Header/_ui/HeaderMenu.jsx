
import { useState } from "react"

const HeaderMenu = ({
    callbackIsOpen,
}) => {

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
        callbackIsOpen(!isActive);
    }

    return (
        <div 
            className={`snuggle-header__menu ${
                isActive ? 'is--active' : ''
            }`}
            onClick={() => handleToggle()}
        >
            <p>
                {
                    !isActive
                    ? 'Menu'
                    : 'Close'
                }
            </p>
        </div>
    )
}

export default HeaderMenu;