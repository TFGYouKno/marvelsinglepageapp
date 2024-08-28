import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <>
        <nav className="clearfix">
            <Link to="/">Home Page</Link>
            <NavLink to="/characters" activeClassName="active">Characters</NavLink>
            <NavLink to="/comics" activeClassName="active">Comics</NavLink>
        </nav>
        </>
    )
}

export default NavBar;