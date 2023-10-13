import "./Header.css"

const Header = ({ logo }) => {
    return(
        <header>
            <img src={logo} alt="page logo" />
            <nav><ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/potd">Potd</NavLink>
                </li>
            </ul></nav>
        </header>
    )
}

export default Header;