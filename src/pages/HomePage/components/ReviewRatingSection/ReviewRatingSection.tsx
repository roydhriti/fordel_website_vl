import React, { FC } from "react";
import styles from "./ReviewRatingSection.module.scss";

interface ReviewRatingSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const ReviewRatingSection: FC<ReviewRatingSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.ReviewRatingSection}>
      gjgjhffhk
      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default ReviewRatingSection;
