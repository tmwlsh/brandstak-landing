import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Journey = () => {
  return (
    <div className={styles.journey} id="solution-overview">
      <Container size="medium">
        <h3><span>brandstak</span> An End To Wholesale Re-Platforming</h3>
        <div className={styles.journeyInner}>
          <ul>
            <li>
              <span>01</span>
              <p>Replacement of web and store analytics tools with BrandStak.</p>
            </li>
            <li>
              <span>02</span>
              <p>Augmentation of your existing storefront with new shopping cart and personalisation technologies to supercharge your customer journeys.</p>
            </li>
            <li>
              <span>03</span>
              <p>Improvement of omnichannel order management through joined up data management.</p>
            </li>
            <li>
              <span>04</span>
              <p>Implementation of additional microservices to support additional user journeys,</p>
            </li>
            <li>
              <span>05</span>
              <p>Re-implementation of the front end as a headless commerce interface.</p>
            </li>
            <li>
              <span>06</span>
              <p>Addition of further MACH, SaaS and composable commerce tools.</p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Journey;
