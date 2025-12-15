import { Link, useNavigate, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pendingTasks">Pending Tasks</Link>
          <Link to="/completedTasks">Completed Tasks</Link>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;


