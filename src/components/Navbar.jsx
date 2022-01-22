import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/profile" exact>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Message</NavLink>
      </div>
      <div>
        <a href="#d">News</a>
      </div>
      <div>
      <a href="#d">News</a>
      </div>
      <div>
      <a href="#d">News</a>
      </div>
    </nav>
  );
};

export default Navbar;
