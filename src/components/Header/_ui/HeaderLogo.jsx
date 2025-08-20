
import { NavLink } from "react-router-dom"

import AppImg from "components/AppImg"
import Logo from "assets/logo.png"

const HeaderLogo = () => {
    return(
        <div className="ran-header__logoholder">
            <NavLink to="/">
                <AppImg 
                    src={Logo} 
                    extraClass="ran-header__logo" 
                    alt="RAN EP.7" 
                />
            </NavLink>
        </div>
    )
}

export default HeaderLogo;