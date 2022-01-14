import React, { useState } from "react";
import Container from "../container";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import * as styles from "./styles.module.scss";

import Logo from "../../svgs/logo.svg";

const Header = () => {

  const [hambOpen, setHambOpen] = useState(false);

  const toggleHamb = () => {
    setHambOpen(!hambOpen);
  }

  const headerHambClasses = [styles.headerHamb, hambOpen ? styles['open'] : styles['closed']];
  const mobileHeaderClasses = [styles.mobileHeader, hambOpen ? styles['open'] : styles['closed']];

  return (
    <>
      <div className={mobileHeaderClasses.join(" ")}>
        <ul>
          <li onClick={toggleHamb}><AnchorLink to="#summary" title="Summary">Summary</AnchorLink></li>
          <li onClick={toggleHamb}><AnchorLink to="#key-benefits" title="Key Benefits">Key Benefits</AnchorLink></li>
          <li onClick={toggleHamb}><AnchorLink to="#the-team" title="Mission Statement">Meet the Team</AnchorLink></li>
          <li onClick={toggleHamb}><AnchorLink to="#key-offering" title="Key Offering">Key Offering</AnchorLink></li>
          <li onClick={toggleHamb}><AnchorLink to="#use-cases" title="Use Cases">Use Cases</AnchorLink></li>
          <li onClick={toggleHamb}><AnchorLink to="#solution-overview" title="Solution Overview">Solution Overview</AnchorLink></li>
          <li onClick={toggleHamb}><AnchorLink to="#mission-statement" title="Mission Statement">Mission Statement</AnchorLink></li>
        </ul>
      </div>
      <header className={styles.header}>
        <Container size="large">
          <div className={styles.headerInner}>
            <AnchorLink to="#summary" title="Header Link">
              <Logo />
            </AnchorLink>
            <div onClick={toggleHamb} className={headerHambClasses.join(" ")}>
              <div className={styles.headerHambLine} />
              <div className={styles.headerHambLine} />
              <div className={styles.headerHambLine} />
            </div>
            <nav className={styles.headerNav}>
              <ul>
                <li><AnchorLink to="#summary" title="Summary">Summary</AnchorLink></li>
                <li><AnchorLink to="#key-benefits" title="Key Benefits">Key Benefits</AnchorLink></li>
                <li><AnchorLink to="#the-team" title="Mission Statement">Meet the Team</AnchorLink></li>
                <li><AnchorLink to="#key-offering" title="Key Offering">Key Offering</AnchorLink></li>
                <li><AnchorLink to="#use-cases" title="Use Cases">Use Cases</AnchorLink></li>
                <li><AnchorLink to="#solution-overview" title="Solution Overview">Solution Overview</AnchorLink></li>
                <li><AnchorLink to="#mission-statement" title="Mission Statement">Mission Statement</AnchorLink></li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Header;
