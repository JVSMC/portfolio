import '../Menu/Menu.css'


/**
 * The Menu component is a React component that renders a list of menu items with transition animation
 * based on the isOpen prop.
 * @returns The Menu component is returning a JSX element, specifically an unordered list (<ul>) with
 * four list items (<li>). Each list item contains an anchor tag (<a>) with a href attribute.
 */
const Menu = ({isOpen}) => {
    return (
        <ul className='navbar-menu bk-w' transition-style={`${isOpen ? 'in:wipe:up' : 'in:wipe:down'}`}>
            <li><a href="">Inicio</a></li>
            <li><a href="">Mis habilidades</a></li>
            <li><a href="">Proyectos destacados</a></li>
            <li><a href="">Formulario de contacto</a></li>
        </ul>
    );
};

export default Menu;