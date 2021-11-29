import * as React from "react";
import Header from "../header";
import Footer from "../footer";
import Socials from "../socials";

import "../../sass/basics.scss";
import "../../sass/typography.scss";

import * as styles from "./styles.module.scss";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Socials />
      <Footer />
    </div>
  )
}

export default Layout;
