
import { NavLink, useLocation } from "react-router-dom"

import "./_styles.sass"

const LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Rankings', href: '/rankings' },
    { name: 'Top-up', href: '/top-up' },
    { name: 'News', href: '/news' },
    { name: 'Support', href: '/support' },
];

const HeaderLinks = ({
    isMenuOpen,
    isInSection,
    callbackLogin,
}) => {
    return(
        <div 
            className={`ran-header__linksholder ${
                isMenuOpen ? 'is--active' : ''
            } ${
                isInSection ? 'in--section' : ''
            }`}
        >

            <div className="ran-header__linksholder-bg"></div>

            <div className="ran-header__links">
                {
                    LINKS.map((item, index) => {
                        return <Link
                            key={index}
                            attr={item}
                        />
                    })
                }

                <LinkAuth onClick={() => callbackLogin(true)} />
            </div>

        </div>
    )
}

export default HeaderLinks;


const Link = ({
    attr,
}) => {

    const location = useLocation();

    return(
        <div className={`ran-header__link ${
            attr?.href === location?.pathname ? 'is--active' : ''
        }`}>
            <NavLink to={attr?.href}>
                <p>{ attr?.name }</p>
            </NavLink>
        </div>
    )
}

const LinkAuth = ({
    ...props
}) => {
    return(
        <div 
            className={`ran-header__link link--auth`}
            onClick={props.onClick}
        >
            <p>LOGIN / REGISTER</p>
        </div>
    )
}