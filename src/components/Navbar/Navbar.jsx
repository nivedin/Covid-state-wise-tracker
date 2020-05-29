import React from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
      <span></span>
        <div className={styles.title}>
          <a href="/">Covid Tracker</a>
        </div>
        <div className={styles.items}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="https://covid-19-trackernp.netlify.app">GLOBAL</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
