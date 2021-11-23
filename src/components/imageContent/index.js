import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const ImageContent = () => {
  return (
    <div className={styles.imageContent}>
      <Container size="large" padd="nopadd">
        <div className={styles.imageContentInner}>
          <div className={styles.imageContentImage}>

          </div>
          <div className={styles.imageContentContent}>
            <p className={styles.textMain}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique velit sit amet turpis porta, non dignissim massa gravida. Praesent id libero libero. Cras non semper nisi. Duis id aliquet elit, eu facilisis risus. Maecenas a ligula scelerisque, molestie nisi et, vestibulum erat. Duis vitae nulla fringilla, pulvinar leo quis, semper sapien. In ultrices pellentesque purus, nec finibus magna venenatis in. Morbi consectetur lacinia consequat. Curabitur hendrerit eget eros.</p>
            <p className={styles.textSecondary}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a dignissim nunc, finibus dignissim lectus. In hac habitasse platea dictumst. Morbi dolor risus, vehicula quis ante sit amet, congue ultrices ligula. Curabitur tortor erat, tincidunt a faucibus cursus, feugiat faucibus quam. Ut rutrum magna a sem consequat</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ImageContent;
