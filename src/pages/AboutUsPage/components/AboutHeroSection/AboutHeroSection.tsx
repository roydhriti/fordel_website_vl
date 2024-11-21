import React, { FC } from "react";
import styles from "./AboutHeroSection.module.scss";

interface AboutHeroSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const AboutHeroSection: FC<AboutHeroSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.AboutHeroSection}>
      <div className={styles.HeroContainer}>
        <div className={styles.BgImg}>
          <img
            src="images/about-us-hero-img.svg"
            alt="bg img of about us page"
          />
        </div>

        <div className={styles.HeadingWrap}>
          <h2>More than Mortgages</h2>

          <h1>Enhancing Lives through Action</h1>

          <button className={styles.AboutHeroButton}>
            <div className="lg">See More at Veterans United Foundation</div>

            <img src="images/arrow-up-right.svg" alt="hero button arrow icon" />
          </button>
        </div>
      </div>

      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
