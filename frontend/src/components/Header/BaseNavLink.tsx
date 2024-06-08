import { NavLink, NavLinkProps } from "react-router-dom";
import "./header.css";

const BaseNavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${className} ${isActive ? "active" : ""}`}
    >
      {children}
    </NavLink>
  );
};

export default BaseNavLink;
