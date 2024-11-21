import React, { FC } from "react";
import styles from "./ContactInformationSection.module.scss";

interface ContactInformationSectionProps {}

const ContactInformationSection: FC<ContactInformationSectionProps> = () => (
  <div className={styles.ContactInformationSection}>
    <div className={styles.HeadingWrap}>
      <h1>Contact Us</h1>

      <div className={styles.border}></div>
    </div>

    <div className={styles.Container}>
      <div className={styles.ContactDetailWrap}>
        <div className={styles.ContactFormWrap}>
          <form>
            <div className={styles.FirstCol}>
              <div className={styles.FormGroup}>
                {/* <label className="sub" htmlFor="name"></label> */}

                <input
                  className="sub"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name Here"
                />
              </div>

              <div className={styles.FormGroup}>
                {/* <label htmlFor="email" className="sub">
                  Your Mail Here
                </label> */}

                <input
                  className="sub"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Mail Here"
                />
              </div>

              <div className={styles.FormGroup}>
                {/* <label className="sub" htmlFor="phone"></label> */}
                <input
                  className="sub"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className={styles.SecondCol}>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="sub"
                required
              ></textarea>

              <button className="lg">Send Message</button>
            </div>
          </form>
        </div>

        <div className={styles.ContactInfo}>
          <div className={styles.InfoWrap}>
            <img src="images/call-icon.svg" alt="call image" />

            <div className={styles.Content}>
              <h6 className="sub">Call Us On:</h6>

              <h5>911-9845445455</h5>
            </div>
          </div>

          <div className={styles.InfoWrap}>
            <img src="images/email-icon.svg" alt="email image" />

            <div className={styles.Content}>
              <h6 className="sub">Email Us:</h6>

              <h5>youremail@gmail.com</h5>
            </div>
          </div>

          <div className={styles.InfoWrap}>
            <img src="images/location-icon.svg" alt="location image" />

            <div className={styles.Content}>
              <h6 className="sub">Main Office:</h6>

              <h5>483920, Moscow, Myasnitskaya 22/2/5, Office 4</h5>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ScrollIcon}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  </div>
);

export default ContactInformationSection;
