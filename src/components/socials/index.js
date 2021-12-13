import * as React from "react";

import * as styles from "./styles.module.scss";

import Linkedin from "../../svgs/linkedin-brands.svg";
import Mail from "../../svgs/envelope-regular.svg";

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <li><a href="#"><Linkedin /></a></li>
      <li><a href="#"><Mail /></a></li>
    </ul>
  )
}

export default Socials;
