import React, { useState } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Header = () => {

  const [hambOpen, setHambOpen] = useState(false);

  const toggleHamb = () => {
    setHambOpen(!hambOpen);
  }

  const headerHambClasses = [styles.headerHamb, hambOpen ? styles['open'] : styles['closed']];

  return (
    <header className={styles.header}>
      <Container size="large">
        <div className={styles.headerInner}>
          <a className={styles.headerLogo} href="/">B</a>
          <div onClick={toggleHamb} className={headerHambClasses.join(" ")}>
            <div className={styles.headerHambLine} />
            <div className={styles.headerHambLine} />
            <div className={styles.headerHambLine} />
          </div>
          <nav className={styles.headerNav}>
            <ul>
              <li><a href="/">Summary</a></li>
              <li><a href="/">Key Offering</a></li>
              <li><a href="/">Solution Overview</a></li>
              <li><a href="/">Key Benefits</a></li>
              <li><a href="/">Use Cases</a></li>
              <li><a href="/">Journey</a></li>
              <li><a href="/">Mission Statement</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header;
