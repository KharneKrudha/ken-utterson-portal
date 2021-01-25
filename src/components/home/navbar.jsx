import React from "react";
import { NavLink, useLocation } from "react-router-dom";


function Navbar() {

  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink activeStyle={{ color: 'red', textShadow: '4px 4px rgb(90, 90, 90)' }} to="/home" className="glitch" data-text='HEll' isActive={() => ['/', '/home'].includes(pathname)}>HELL</NavLink>

        <NavLink activeStyle={{ color: 'red', textShadow: '4px 4px rgb(90, 90, 90)' }} to="/releases" className="glitch" data-text='ReLeASeS'>RELEASES</NavLink>

        <NavLink activeStyle={{ color: 'red', textShadow: '4px 4px rgb(90, 90, 90)' }} to="/tools" className="glitch" data-text='TOOlS'>TOOLS</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;


