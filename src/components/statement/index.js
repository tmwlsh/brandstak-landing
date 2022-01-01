import React, { useState } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DotPattern from "../../svgs/dot-pattern.svg";

const Statement = () => {
  return (
    <div className={styles.statement} id="mission-statement">
      <DotPattern />
      <Container size="medium">
        <div className={styles.statementBlock}>
          <h4>Our Differentiators</h4>
          <p>Integrating best-of-breed SaaS based solutions requires significant technical as well as sector knowledge; it is becoming increasingly complex and expensive for a mid market brand to match the customer experience of their larger competitors in a market where consumer expectations evolve at pace.</p>
        </div>
        <div className={styles.statementBlock}>
          <h4>Our Mission</h4>
          <p>Democratize access to next generation data and systems by making full platform composable commerce / MACH accessible and affordable for the mid market lifestyle sector. BrandStak will make your existing platform MACH-ready at a cost you can afford, saving you many times its cost as you adopt future technologies and driving significant value add along the way.</p>
        </div>
        <div className={styles.statementBlock}>
          <h4>Our Value</h4>
          <p>Presenting a single point of integration and a single version of the truth for the real-time performance management of products, locations, sites and consumer engagement. Solving key business issues - catalog management, real-time pricing, inventory utilization – alongside the ability to track and react to market signals.</p>
        </div>
      </Container>
    </div>
  )
}

export default Statement;
