import * as React from "react";

import * as styles from "./styles.module.scss";

const Container = ({children, size="large", padd="padd"}) => {
  const containerStyles = [styles.container, styles[size], styles[padd]];
  return (
    <div className={containerStyles.join(" ")}>
      {children}
    </div>
  )
}

export default Container;
