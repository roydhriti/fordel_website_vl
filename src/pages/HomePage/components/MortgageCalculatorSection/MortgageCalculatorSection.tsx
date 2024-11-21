import React, { FC } from "react";
import styles from "./MortgageCalculatorSection.module.scss";

interface MortgageCalculatorSectionProps {
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const MortgageCalculatorSection: FC<MortgageCalculatorSectionProps> = ({
  scrollRef,
}) => {
  const handleClick = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.MortgageCalculatorSection}>
      <div className={styles.HeadingWrap}>
        <h2>Estimate how much home you can afford</h2>
        <h6 className="sub">
          Get a snapshot of your homebuying power based on your income and
          expenses.
        </h6>
      </div>

      <div className={styles.CalculatorWrap}>
        <div style={{ width: "960px", position: "relative" }}>
          <iframe
            src="https://www.mortgagecalculator.net/embeddable/v2/?size=1"
            width="100%"
            frameBorder="0"
            scrolling="no"
            height="340"
          ></iframe>
          {/* <a
          style={{
            width: "100%",
            // background: "#075269",
            color: "#075269",
            textAlign: "center",
            fontWeight: "bold",
            display: "block",
            clear: "both",
            padding: "3px 0",
            fontSize: "12px",
            textTransform: "uppercase",
            fontFamily: "arial",
            textDecoration: "none",
            cursor: "pointer",
            marginTop: "-36px",
            position: "absolute",
          }}
          href="https://www.mortgagecalculator.net/"
        >
          Powered By www.MortgageCalculator.net
        </a> */}
        </div>
      </div>

      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default MortgageCalculatorSection;
