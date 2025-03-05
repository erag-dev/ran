
import { NavLink, useLocation } from "react-router-dom"

const LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Adopt', href: '/adopt' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
];

const HeaderLinks = ({
    isMenuOpen,
}) => {
    return(
        <div className={`snuggle-header__links ${
            isMenuOpen ? 'is--active' : ''
        }`}>
            {
                LINKS.map((item, index) => {
                    return <Link
                        key={index}
                        attr={item}
                    />
                })
            }
        </div>
    )
}

export default HeaderLinks;


const Link = ({
    attr,
}) => {

    const location = useLocation();

    return(
        <div className={`snuggle-header__link ${
            attr?.href === location?.pathname ? 'is--active' : ''
        }`}>
            <NavLink to={attr?.href}>
                <p>{ attr?.name }</p>
            </NavLink>
        </div>
    )
}