import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileArrowDown, faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import '../Navbar/Navbar.css';
import Menu from "../Menu/Menu";

/**
 * The Navbar component is a React component that renders a navigation bar with buttons and icons.
 * @returns The Navbar component is returning a JSX element, specifically a <nav> element containing
 * three buttons and an anchor tag. The first button has an onClick event handler that calls the
 * toggleMenu function and toggles the visibility of the menu. It also renders a FontAwesomeIcon
 * component with either the faBarsStaggered or faBars icon, depending on the value of the menuVisible
 * state. If the menuVisible
 */
function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav>
            <button onClick={toggleMenu} className="bk-w navbar-btn">
                <FontAwesomeIcon icon={menuVisible ? faBarsStaggered : faBars} className="navbar-btn-icon" />
            {menuVisible && <Menu isOpen={menuVisible}/>}
            </button>
            <button className="bk-w navbar-btn">
                <FontAwesomeIcon icon={faFileArrowDown} className="navbar-btn-icon btn-down" />
                Ver mi CV
            </button>
            <a href="https://www.linkedin.com/in/javssmarc" className="navbar-btn cta">
                <FontAwesomeIcon icon={faLinkedin} className="navbar-btn-icon url" />
            </a>
        </nav>
    );
}

export default Navbar;