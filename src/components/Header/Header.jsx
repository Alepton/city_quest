import React from "react";
import { NavLink } from "react-router-dom";
import c from './Header.module.css';

const Header = (props) => {
  return (
    <header className={c.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"></img>
      <div className={c.loginBlock} >
        { props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
