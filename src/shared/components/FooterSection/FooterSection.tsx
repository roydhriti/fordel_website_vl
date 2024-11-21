import React, { FC } from "react";
import styles from "./FooterSection.module.scss";
import { Link } from "react-router-dom";

interface FooterSectionProps {}

const FooterSection: FC<FooterSectionProps> = () => (
  <div className={styles.FooterSection}>
    <div className={styles.LeftDiv}>
      <img src="images/company-logo.svg" alt="company logo" />

      <div className={styles.FooterAboutUsPara}>
        <div className={styles.AboutUsContent}>
          <p className="body">
            The first free end-to-end analytics service for the site, designed
            to work with enterprises of various levels and business segments.
          </p>
        </div>

        <div className={styles.AboutUsRoute}>
          <Link to="/AboutUsPage">
            <p className="overline">MORE ABOUT US</p>
          </Link>

          <div className={styles.dot}></div>
        </div>
      </div>

      <div className={styles.SocialMediaDiv}>
        <img src="images/twitter-icon.svg" alt="twitter icon" />
        <img src="images/facebook-icon.svg" alt="facebook icon" />

        <div className={styles.SideBySide}>
          <img src="images/instagram-icon.svg" alt="instagram icon" />
          <img src="images/youtube-icon.svg" alt="youtube icon" />
        </div>
      </div>
    </div>

    <div className={styles.RightDiv}>
      <nav>
        <ul className={styles.TabWrap}>
          <Link to="/">
            <li className="mid">Home</li>
            <div className={styles.dot}></div>
          </Link>

          <Link to="/VaLoansPage">
            <li className="mid">VA Loans</li>
            <div className={styles.dot}></div>
          </Link>

          <Link to="/AboutUsPage">
            <li className="mid">About</li>
            <div className={styles.dot}></div>
          </Link>

          <Link to="/HomeBuyingProgramPage">
            <li className="mid">Reviews</li>
            <div className={styles.dot}></div>
          </Link>
        </ul>
      </nav>

      <div className={styles.ContactLocationWrap}>
        <div className={styles.ContactWrap}>
          <h5>Contact Us</h5>

          <div className={styles.para}>
            <p className="body">+1(999)888-77-66</p>

            <p className="body">dummy@loremipsum.com</p>
          </div>
        </div>

        <div className={styles.LocationWrap}>
          <h5>Location</h5>
          <div className={styles.content}>
            <div className={styles.para}>
              <p className="body">483250, Moscow,</p>
              <p className="body">Myasnitskaya 22/2/5, Office 4</p>
            </div>

            <div className={styles.CopyWriteText}>
              <p className="bodyv2">
                © 2021 — Copyright
                <br />
                All Rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterSection;
