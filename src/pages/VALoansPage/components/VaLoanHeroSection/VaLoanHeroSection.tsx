import React, { FC } from "react";
import styles from "./VaLoanHeroSection.module.scss";

interface VaLoanHeroSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const VaLoanHeroSection: FC<VaLoanHeroSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.VaLoanHeroSection}>
      <div className={styles.HeroContainer}>
        <div className={styles.BgImg}>
          <img
            src="images/va-loans-hero-img.svg"
            alt="hero section img of va loans"
          />
        </div>

        <div className={styles.HeadingWrap}>
          <div className={styles.MainHeading}>
            <h2>VA Loans</h2>
            <h1>The Complete Guide</h1>
          </div>

          <div className={styles.SoftHeading}>
            <h6 className="sub">
              Get the most out of your hard-earned benefit with the necessary
              tools to navigate your VA home purchase or refinance.
            </h6>
          </div>

          <button className={styles.VaHeroButton}>
            <div className="lg">Start Your Quote Online</div>

            <img
              className={styles.ArrowIcon}
              src="images/arrow-up-right.svg"
              alt="arrow icon"
            />
          </button>
        </div>
      </div>

      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default VaLoanHeroSection;
