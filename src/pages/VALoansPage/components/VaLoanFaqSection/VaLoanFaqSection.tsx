import React, { FC } from "react";
import styles from "./VaLoanFaqSection.module.scss";

interface VaLoanFaqSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const VaLoanFaqSection: FC<VaLoanFaqSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const queries = [
    {
      question: "what is the VA guaranty?",
      answer:
        "Although the VA loan is a federal program, the government generally does not make direct loans to Veterans. Instead, private lenders including Veterans United Home Loans finance the loan while the Department of Veterans Affairs offers a guaranty.",
    },
    {
      question: "what is the VA guaranty?",
      answer:
        "Although the VA loan is a federal program, the government generally does not make direct loans to Veterans. Instead, private lenders including Veterans United Home Loans finance the loan while the Department of Veterans Affairs offers a guaranty.",
    },
    {
      question: "what is the VA guaranty?",
      answer:
        "Although the VA loan is a federal program, the government generally does not make direct loans to Veterans. Instead, private lenders including Veterans United Home Loans finance the loan while the Department of Veterans Affairs offers a guaranty.",
    },
    {
      question: "what is the VA guaranty?",
      answer:
        "Although the VA loan is a federal program, the government generally does not make direct loans to Veterans. Instead, private lenders including Veterans United Home Loans finance the loan while the Department of Veterans Affairs offers a guaranty.",
    },
    {
      question: "what is the VA guaranty?",
      answer:
        "Although the VA loan is a federal program, the government generally does not make direct loans to Veterans. Instead, private lenders including Veterans United Home Loans finance the loan while the Department of Veterans Affairs offers a guaranty.",
    },
  ];

  const Accordion: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
  }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={styles.QuesAnsWrap}>
        <div
          className={`${styles.question} ${isOpen ? styles.open : ""}`}
          onClick={toggleAccordion}
        >
          <h6 className="h5">{question}</h6>
          <img
            className={isOpen ? styles.CaretIconRotate : ""}
            src="images/caret-down.svg"
            alt="faq question caret symbol"
          />
        </div>

        {isOpen && <p className="body">Ans: {answer}</p>}
      </div>
    );
  };

  return (
    <div className={styles.VaLoanFaqSection}>
      <div className={styles.FaqContainer}>
        <div className={styles.HeadingWrap}>
          <div className={styles.heading}>
            <h3>
              <span>VA Loans</span> FAQs
            </h3>
          </div>

          <div className={styles.para}>
            <p className="body">
              VA loans have helped generations of Veterans and military families
              build stronger financial futures.
            </p>

            <p className="body">
              Here are a few of the most frequently asked questions about this
              historic home loan benefit.
            </p>
          </div>
        </div>

        <div className={styles.FaqWrap}>
          {queries.map((query, index) => (
            <Accordion
              key={index}
              question={query.question}
              answer={query.answer}
            />
          ))}
        </div>
      </div>

      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default VaLoanFaqSection;
