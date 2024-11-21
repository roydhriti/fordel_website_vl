import React, { FC } from "react";
import styles from "./VaLoanBenefitSection.module.scss";

interface VaLoanBenefitSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const VaLoanBenefitSection: FC<VaLoanBenefitSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.VaLoanBenefitSection}>
      VaLoanBenefitSection Component
      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default VaLoanBenefitSection;
