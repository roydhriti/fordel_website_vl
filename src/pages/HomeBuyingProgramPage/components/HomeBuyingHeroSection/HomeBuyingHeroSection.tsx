import React, { FC } from "react";
import styles from "./HomeBuyingHeroSection.module.scss";

interface HomeBuyingHeroSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const HomeBuyingHeroSection: FC<HomeBuyingHeroSectionProps> = ({
  scrollRef,
}) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.HomeBuyingHeroSection}>
      <div className={styles.HeroContainer}>
        <div className={styles.BgImg}>
          <img
            src="images/home-buying-hero-img.svg"
            alt="bg img of home buying program page page"
          />
        </div>

        <div className={styles.HeadingWrap}>
          <div className={styles.TextWrap}>
            <h2>Auto Home Buying</h2>

            <h1>
              Buy a <span>Home</span> with confidence.
            </h1>

            <h6 className="sub">
              Discover the ease and convenience of using Costco Auto Program.
              Get started on the purchase or lease of a new vehicle or learn
              more about buying a used car, truck or SUV.
            </h6>
          </div>

          <button className={styles.HomeBuyingHeroButton}>
            <div className="lg">Start Your Quote Online</div>

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

export default HomeBuyingHeroSection;
