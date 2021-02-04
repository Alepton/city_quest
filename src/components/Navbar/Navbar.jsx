import React from "react";
import c from './Navbar.module.css';

const Navbar =  () => {
  return (
    <nav className={c.nav}>
        <div className={c.item}>
          <a href="/Profile"> Profile</a>
        </div>
        <div className={c.item}>
          <a href="/Dialogs"> Dialogs</a>
        </div>
        <div className={c.item}>
          <a href="/Messages"> Messages</a>
        </div>
        <div className={c.item}>
          <a href="/News"> News</a>
        </div>
        <div className={c.item}>
          <a href="/Music"> Music</a>
        </div>
        <div className={c.item}>
          <a href="/Settings"> Settings</a>
        </div>
      </nav>
  );
};

export default Navbar;
