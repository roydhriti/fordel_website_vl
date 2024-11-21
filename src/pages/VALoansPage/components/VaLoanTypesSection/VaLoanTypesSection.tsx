import React, { FC } from "react";
import styles from "./VaLoanTypesSection.module.scss";

interface VaLoanTypesSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const VaLoanTypesSection: FC<VaLoanTypesSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.VaLoanTypesSection}>
      VaLoanTypesSection Component
      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default VaLoanTypesSection;
