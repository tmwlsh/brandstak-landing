import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="large">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <h1>Logo</h1>
          </div>
          <div className={styles.footerRight}>
            <p>&copy; Brandstak 2021</p>
            <ul>
              <li><a href="#">FB</a></li>
              <li><a href="#">TW</a></li>
              <li><a href="#">LI</a></li>
              <li><a href="#">IN</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
