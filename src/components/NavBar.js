import { NavLink, Link } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai';

function NavBar() {
  return (
    <nav className="navbar-dark bg-dark mb-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-left">
            <h1 className="app-title">
              <Link to="/">
                Users
                </Link>
            </h1>
          </div>
          <div className="col-sm-4 text-right">
            <NavLink to="/">
            <AiOutlineUserAdd style={{ marginBottom: "2px" }} />
            </NavLink>
            <NavLink to="/adduser">Add User</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
