import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import Image1 from "../../images/brandstak-image-2.jpg";
import TallLogo from "../../svgs/tall-logo.svg";

const ImageContent = () => {
  return (
    <div className={styles.imageContent} id="summary">
      <Container size="large" padd="nopadd">
        <div className={styles.imageContentInner}>
          <div className={styles.imageContentImage}>
            <img src={Image1} alt="" />
            <TallLogo />
          </div>
          <div className={styles.imageContentContent}>
            <p className={styles.textMain}><span>BrandStak</span> is a Lifestyle / Omnichannel focused operating system. Delivered as PaaS it addresses issues with complex and legacy back-office systems. Utilising AI/ML analytics across the enterprise BrandStak allows for better decision making and well conceptualised consumer journeys.</p>
            <p className={styles.textSecondary}>BrandStak works alongside your existing systems to add best in class microservices AI and ML to deliver insight improve decision making and enable consumer journeys that will delight and convert more customers.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ImageContent;
