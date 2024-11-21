import React, { FC, useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: FC<HeroSectionProps> = ({ scrollRef }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.HeroSection}>
      <div className={styles.HeroContainer}>
        <img
          src="images/hero-section-key-img.svg"
          alt="hero section key icon"
        />

        <div className={styles.HeroHeaderWrap}>
          <div className={styles.BoldHeader}>
            <h2>Check your eligibility with</h2>
            <h1>The Nation’s #1 VA Lender</h1>
          </div>

          <div className={styles.SoftHeader}>
            <h5>
              See why more Veteran homebuyers choose Veterans United than any
              other VA lender.
            </h5>
          </div>
        </div>

        <div className={styles.HeroYearWrap}>
          <h6 className="sub">
            Top VA Purchase Lender for 7 consecutive years: 2016, 2017, 2018,
            2019, 2020, 2021 and 2022!†
          </h6>
        </div>

        <button className={styles.HeroButton}>
          <div className="lg">Check Your Eligibility here</div>

          <div className={styles.ArrowIcon}>
            <img
              src="images/arrow-up-right.svg"
              alt="hero section button arrow icon"
            />
          </div>
        </button>
      </div>

      <div className={styles.ReviewRatingHeader}>
        <div className={styles.heading}>
          <h4>Reviews & Ratings</h4>
        </div>

        <div className={styles.ScrollIcon} onClick={handleClick}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
