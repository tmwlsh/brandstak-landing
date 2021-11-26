import React, { useState } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DotPattern from "../../svgs/dot-pattern.svg";

const Statement = () => {
  return (
    <div className={styles.statement}>
      <DotPattern />
      <Container size="medium">
        <div className={styles.statementBlock}>
          <h4>The Technical Challenge</h4>
          <p>Integrating best-of-breed SaaS based solutions requires significant technical as well as sector knowledge; it is consequently complex and expensive for a very large number of brands to implement a fullfunction MACH stack & Composable Commerce.</p>
        </div>
        <div className={styles.statementBlock}>
          <h4>Our Technical Mission</h4>
          <p>Democratize the data and systems, by making full platform composable commerce / MACH accessible to the Lifestyle sector at an affordable cost and acceptable risk. BrandStak will make your existing platform MACH-ready at a cost you can afford, this approach will save 10x its cost in future integration costs alone</p>
        </div>
        <div className={styles.statementBlock}>
          <h4>Our Mission towards the Client’s Business</h4>
          <p>Presenting a single version of the truth for the real-time performance management of products, locations, sites and consumer engagement. solving problems on business operations on catalog management, real-time pricing, inventory utilization and ability to track and react to market signals.</p>
        </div>
      </Container>
    </div>
  )
}

export default Statement;
