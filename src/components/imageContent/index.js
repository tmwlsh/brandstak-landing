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
            <p className={styles.textMain}><span>BrandStak</span> is a next generation enterprise operating system for brand owners and vertical retailers. Delivered ‘as a service’ BrandStak addresses the issues these businesses face from a myriad of complex, legacy technology when trying to embrace latest generation marketing and retail technology.</p>
            <p className={styles.textSecondary}>Through our partnerships with key Mach and Marketing AI technology businesses we can deliver AI / ML empowered integration, analytics and data harmonisation creating 360 degree harmonised data flows from even the most complex and diverse back office applications. Ultimately, Brandstak provides the insight, connectivity and data services you need to create engaging customer journeys that will convert, retain and delight your consumers.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ImageContent;
