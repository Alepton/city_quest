import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css';

const Navbar =  () => {
  return (
    <nav className={c.nav}>
        <div className={c.item}>
          <NavLink to="/Profile" activeClassName={c.active}> Profile</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/Dialogs" activeClassName={c.active}> Dialogs</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/Messages" activeClassName={c.active}> Messages</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/News" activeClassName={c.active}> News</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/Music" activeClassName={c.active}> Music</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/Settings" activeClassName={c.active}> Settings</NavLink>
        </div>
      </nav>
  );
};

export default Navbar;
