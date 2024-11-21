import React, { FC } from "react";
import styles from "./VaLoanApplySection.module.scss";

interface VaLoanApplySectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const VaLoanApplySection: FC<VaLoanApplySectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.VaLoanApplySection}>
      VaLoanApplySection Component
      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default VaLoanApplySection;
