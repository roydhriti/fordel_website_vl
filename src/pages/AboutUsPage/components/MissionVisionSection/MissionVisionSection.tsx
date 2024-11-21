import React, { FC } from "react";
import styles from "./MissionVisionSection.module.scss";

interface MissionVisionSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const MissionVisionSection: FC<MissionVisionSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.MissionVisionSection}>
      <div className={styles.HeadingWrap}>
        <h1>Our</h1>

        <div className={styles.Heading}>
          <h1>Mission & Vision</h1>
          <div className={styles.border}></div>
        </div>
      </div>

      <div className={styles.Container}>
        <div className={styles.MissionVisionWrap}>
          <div className={styles.ContentWrap}>
            <div className={styles.Image}>
              <img src="images/mission-img.svg" alt="mission image" />
            </div>

            <div className={styles.Content}>
              <h3>Mission</h3>

              <p className="caption">
                To help our users take control of their financial destiny. 
              </p>
            </div>
          </div>

          <div className={styles.ContentWrap}>
            <div className={styles.Image}>
              <img src="images/vision-img.svg" alt="vision image" />
            </div>

            <div className={styles.Content}>
              <h3>Vision</h3>

              <p className="caption">
                To help our users take control of their financial destiny. 
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ScrollIcon} onClick={handleClick}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
