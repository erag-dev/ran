
import { NavLink } from "react-router-dom"

import AppImg from "components/AppImg"
import Logo from "assets/logo.svg"

const HeaderLogo = () => {
    return(
        <div className="snuggle-header__logoholder">
            <NavLink to="/">
                <AppImg 
                    src={Logo} 
                    extraClass="snuggle-header__logo" 
                    alt="Snuggle Seekers" 
                />
            </NavLink>
        </div>
    )
}

export default HeaderLogo;