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
            <p className={styles.textMain}><span>BrandStak</span> is Lifestyle/Omnichannel focused Enterprise Operating System delivered as PaaS that addresses the issues with complex and legacy back-office systems that delivers using AI/ML Advanced Analytics across the enterprise for better decision making and designing consumer journeys.</p>
            <p className={styles.textSecondary}>BrandStak works alongside your existing systems to add best in class microservices AI and ML to deliver insight improve decision making and enable consumer journeys that will delight and convert more customers. BrandStak and its microservices partners can deliver proven results in the Brand market - these include.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ImageContent;
