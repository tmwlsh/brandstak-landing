import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import Image2 from "../../images/brandstak-image-1.jpg";

const ImageContentTwo = () => {
  return (
    <div className={styles.imageContent} id="key-offering">
      <Container size="large" padd="nopadd">
        <div className={styles.imageContentInner}>
          <div className={styles.imageContentImage}>
            <img src={Image2} alt="" />
          </div>
          <div className={styles.imageContentContent}>
            <p className={styles.textMain}><span>BrandStak</span> – Data-first enterprise PaaS operating system developed specifically for the needs of the wear and home branded lifestyle sector</p>
            <p className={styles.textMain}><span>BrandStak ETaL</span> - Rapid, AI driven data onboarding & ETaL services</p>
            <p className={styles.textMain}><span>Unified Commerce Database (UCD)</span> – The central hub for all future product integrations and single version of the truth data lake</p>
            <p className={styles.textMain}><span>UCD API</span> - Data and API ready pipeline</p>
            <p className={styles.textMain}><span>AI / ML Engines</span> - Based on genuine retail/lifestyle only use cases</p>
            <p className={styles.textMain}>Easy adoption of <span>MACH</span> and <span>Composable Commerce</span> technology</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ImageContentTwo;
