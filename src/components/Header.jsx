import { NavLink } from "react-router-dom";
import "../styles/common.css";

export default function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="logo">@Nguyen Thi Thuy Tien</NavLink>
      <nav className="nav">
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
        <NavLink to="/works" className={({ isActive }) => (isActive ? "active" : "")}>
          Works
        </NavLink>
        <NavLink to="/playground" className={({ isActive }) => (isActive ? "active" : "")}>
          Playground
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
