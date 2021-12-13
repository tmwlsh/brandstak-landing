import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contactForm} id="contact">
      <h3><span>brandstak</span> Contact Us</h3>
      <Container size="small">
        <div className={styles.contactFormInner}>
          <form>
            <div className={styles.formField}>
              <label>
                <p>Full Name</p>
                <input type="text" placeholder="Full Name" />
              </label>
            </div>
            <div className={styles.formField}>
              <label>
                <p>Email Address</p>
                <input type="email" placeholder="Email Address" />
              </label>
            </div>
            <div className={styles.formField}>
              <label>
                <p>Phone Number</p>
                <input type="text" placeholder="Phone Number" />
              </label>
            </div>
            <div className={styles.formField}>
              <label>
                <p>Location</p>
                <input type="text" placeholder="Location" />
              </label>
            </div>
            <div className={[styles.formField, styles['full']].join(" ")}>
              <label>
                <p>Message</p>
                <textarea placeholder="Message" />
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
