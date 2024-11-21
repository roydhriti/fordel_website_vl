import React, { FC } from "react";
import styles from "./VaLoanIntroSection.module.scss";

interface VaLoanIntroSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const VaLoanIntroSection: FC<VaLoanIntroSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.VaLoanIntroSection}>
      <div className={styles.IntroContainer}>
        <div className={styles.heading}>
          <h3>
            What is a <span>VA Loan</span>?
          </h3>
        </div>

        <div className={styles.ParaWrap}>
          <div className={styles.ParaOne}>
            <p className="body">
              A VA loan is a government-backed mortgage option available
              to Veterans, service members and surviving spouses. VA loans are
              made by private lenders, like mortgage companies and banks, and
              not the Department of Veterans Affairss.
            </p>
          </div>

          <div className={styles.ParaTwo}>
            <p className="body">
              VA home loans offer competitive interest rates and terms and can
              be used to purchase a single-family home, condominium, multi-unit
              property, manufactured house or new construction.
            </p>
          </div>
        </div>

        <div className={styles.VideoWrap}>
          <iframe
            src="https://www.youtube.com/embed/fJ7lDSo4veI?si=_VONJp59BU-K-F_O"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default VaLoanIntroSection;
