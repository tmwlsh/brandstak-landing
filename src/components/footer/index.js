import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import FullLogo from "../../svgs/full-logo.svg";
import Linkedin from "../../svgs/linkedin-brands.svg";
import Mail from "../../svgs/envelope-regular.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="large">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <FullLogo />
          </div>
          <div className={styles.footerRight}>
            <p>&copy; Brandstak 2021</p>
            <ul>
              <li><a href="#"><Linkedin /></a></li>
              <li><a href="#"><Mail /></a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
