
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
            className={`ran-header__menu ${
                isActive ? 'is--active' : ''
            }`}
            onClick={() => handleToggle()}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HeaderMenu;