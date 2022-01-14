import React, { useState } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DotPattern from "../../svgs/dot-pattern.svg";

const StatsBlock = () => {
  return (
    <div className={styles.statsBlock} id="key-benefits">
      <DotPattern />
      <Container size="medium">
        <p className={styles.statsBlockIntro}>BrandStak and its microservices partners can deliver proven results in the Brand market - these include.</p>
        <ul className={styles.statsBlockInner}>
          <li>
            <span>20%</span>
            <p>Decrease in inventory and 15% improvement in demand fulfillment.</p>
          </li>
          <li>
            <span>30% +</span>
            <p>Reduction in cost to implement future solutions.</p>
          </li>
          <li>
            <span>10%</span>
            <p>Improvement in conversion combined with a 7% increase in AOV. </p>
          </li>
          <li>
            <span>20%</span>
            <p>Decrease in returns.</p>
          </li>
          <li>
            <span>5-10%</span>
            <p>Reduction in journey abandonment.</p>
          </li>
          <li>
            <span>10%</span>
            <p>Increase in click  collect, & try and buy.</p>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default StatsBlock;
