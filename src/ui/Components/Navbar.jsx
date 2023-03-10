import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/login', {
            replace: true
        })
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <Link
                className="navbar-brand"
                to="/home"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/home"
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Héctor Moreno
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={onClick}
                    >
                        Logout
                    </button>
                </ul>
            </div>

        </nav>
    )
}