import React, { useRef, useEffect } from 'react';

import * as styles from "./styles.module.scss";

import Linkedin from "../../svgs/linkedin-brands.svg";
import Mail from "../../svgs/envelope-regular.svg";


const Socials = () => {

  return (
    <ul className={styles.socials}>
      <li><a target="_blank" href="https://www.linkedin.com/company/brandstak"><Linkedin /></a></li>
      <li><a href="mailto:enquiries@brandstak.io?subject=BrandStak Website Enquiry"><Mail /></a></li>
    </ul>
  )
}

export default Socials;
