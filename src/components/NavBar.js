import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.navText}>Carlos Ruiz</h2>
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
        <NavLink
          to="/about"
          activeClassName={styles.active}
          className={styles.NavLink}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
