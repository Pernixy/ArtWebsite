import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.NavBar}>
        <NavLink
          exact
          to="/"
          activeClassName={styles.active}
          className={styles.NavLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName={styles.active}
          className={styles.NavLink}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
