import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contactForm} id="contact">
      <Container size="small">
        <div className={styles.contactFormInner}>
          <form>
            <div className={styles.formField}>
              <label>
                <p>First Name</p>
                <input type="text" placeholder="First Name" />
              </label>
            </div>
            <div className={styles.formField}>
              <label>
                <p>Last Name</p>
                <input type="text" placeholder="Last Name" />
              </label>
            </div>
            <div className={[styles.formField, styles['full']].join(" ")}>
              <label>
                <p>Query</p>
                <textarea placeholder="Query" />
              </label>
            </div>
            <div className={[styles.formField, styles['full']].join(" ")}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactForm;
