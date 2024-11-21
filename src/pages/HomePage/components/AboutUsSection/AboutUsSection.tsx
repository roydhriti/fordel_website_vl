import React, { FC, useEffect, useRef } from "react";
import styles from "./AboutUsSection.module.scss";
import { Link } from "react-router-dom";

interface AboutUsSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const AboutUsSection: FC<AboutUsSectionProps> = ({ scrollRef }) => {
  const bgimgRef = useRef<HTMLImageElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    [bgimgRef, imgRef, contentRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [bgimgRef, imgRef, contentRef].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.AboutUsSection}>
      <div className={styles.BgImg} ref={bgimgRef}>
        <img src="images/about-us-bg-img.svg" alt="about us bg image" />
      </div>

      <div className={styles.AboutUsContainer}>
        <div className={styles.ImgWrap} ref={imgRef}>
          <img src="images/about-us-img.svg" alt="about us image" />
        </div>

        <div className={styles.ContentWrap} ref={contentRef}>
          <div className={styles.heading}>
            <h2>About Us</h2>
          </div>

          <div className={styles.para}>
            <p className="body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <Link to={"/AboutUsPage"}>
            <button className={styles.AboutUsButton}>
              <div className="md">Learn More</div>
              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right.svg"
                  alt="hero section button arrow icon"
                />
              </div>
            </button>
          </Link>
        </div>

        <div className={styles.ScrollIcon} onClick={handleClick}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
