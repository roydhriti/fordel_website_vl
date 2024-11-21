import React, { FC } from "react";
import styles from "./WhyChooseUsSection.module.scss";

interface WhyChooseUsSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const WhyChooseUsSection: FC<WhyChooseUsSectionProps> = ({ scrollRef }) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.WhyChooseUsSection}>
      <div className={styles.BgImg}>
        <img src="images/about-us-bg-img.svg" alt="about us bg image" />
      </div>

      <div className={styles.AboutUsContainer}>
        <div className={styles.ImgWrap}>
          <img src="images/about-us-img.svg" alt="about us image" />
        </div>

        <div className={styles.ContentWrap}>
          <div className={styles.heading}>
            <h2>
              About the <span>Company</span>
            </h2>
          </div>

          <div className={styles.para}>
            <p className="body">
              We’re all about helping Veterans and military families become
              homeowners. In two short decades, we closed over 500,000 VA Loans
              and became the #1 VA lender for homebuyers in the nation.
            </p>

            <p className="body">
              But to us, success isn’t measured in numbers. Our success is
              measured in living our values every day: Be Passionate and Have
              Fun, Deliver Results with Integrity and Enhance Lives.
            </p>

            <p className="body">
              We always push ourselves to be the most knowledgeable provider of
              VA mortgages. We always strive to provide friendly service to
              military homebuyers and their families. And we always seek to lift
              up people and communities across the country.
            </p>
          </div>
        </div>

        <div className={styles.ScrollIcon} onClick={handleClick}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
