import React, { FC, useRef } from "react";
import styles from "./ServicesOverviewSection.module.scss";

interface ServicesOverviewSectionProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const ServicesOverviewSection: FC<ServicesOverviewSectionProps> = ({
  scrollRef,
}) => {
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const secondRowRef = useRef(null);
  // const scrollIconRef = useRef(null);
  // const afterRef = useRef(null);

  // const handleSecondRowClick = () => {
  //   if (secondRowRef.current) {
  //     secondRowRef.current.scrollIntoView({ behavior: "smooth" });
  //     if (scrollIconRef.current) {
  //       // Modify the style directly
  //       scrollIconRef.current.style.display = "none"; // Example: changing the opacity
  //       afterRef.current && afterRef.current.classList.remove("After");
  //     }
  //   }
  // };

  return (
    <div className={`${styles.ServicesOverviewSection} ${styles.After}`}>
      {/* ref={afterRef} */}

      <div className={styles.HeadingWrap}>
        <h2>
          We’ll make it <span>easy.</span> You make it <span>easy.</span>
        </h2>

        <h6 className="sub">
          We’ve streamlined VA homebuying — so you can buy your first or fifth
          home with confidence.
        </h6>
      </div>

      <div className={styles.ServicesWrap}>
        <div className={styles.FirstRow}>
          <div className={styles.ServiceCard}>
            <div className={styles.ImgWrap}>
              <img
                src="images/home-service-img-one.svg"
                alt="image of first service card"
              />
            </div>

            <div className={styles.ContentWrap}>
              <h5>VA Loan Requirements</h5>

              <p className="body">
                See if you meet the requirements to use your cost-saving
                benefits in 2024.
              </p>
            </div>

            <button className={styles.ButtonWrap}>
              <div className="md">Check Your Eligibily here</div>

              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right-blue.svg"
                  alt="button arrow icon"
                />
              </div>
            </button>
          </div>

          <div className={styles.ServiceCard}>
            <div className={styles.ImgWrap}>
              <img
                src="images/home-service-img-two.svg"
                alt="second image of  service card"
              />
            </div>

            <div className={styles.ContentWrap}>
              <h5>Buy with $0 Down</h5>

              <p className="body">
                Skip the down payment with your hard-earned VA Loan benefits.
              </p>
            </div>

            <button className={styles.ButtonWrap}>
              <div className="md">More VA Loan Benefits</div>

              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right-blue.svg"
                  alt="button arrow icon"
                />
              </div>
            </button>
          </div>

          <div className={styles.ServiceCard}>
            <div className={styles.ImgWrap}>
              <img
                src="images/home-service-img-three.svg"
                alt="image of third service card"
              />
            </div>

            <div className={styles.ContentWrap}>
              <h5>VA Loan Calculator</h5>

              <p className="body">
                Estimate a monthly mortgage payment that fits your budget
                including taxes and insurance.
              </p>
            </div>

            <button className={styles.ButtonWrap}>
              <div className="md">Calculate Mortgage Payment</div>

              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right-blue.svg"
                  alt="button arrow icon"
                />
              </div>
            </button>
          </div>
        </div>
        {/* ref={secondRowRef} */}
        <div className={styles.SecondRow}>
          <div className={styles.ServiceCard}>
            <div className={styles.ImgWrap}>
              <img
                src="images/home-service-img-four.svg"
                alt=" image of  fourth service card"
              />
            </div>

            <div className={styles.ContentWrap}>
              <h5>Today’s VA Loan Rates</h5>

              <p className="body">
                See the latest available VA Loan interest rates and lock yours
                in today.
              </p>
            </div>

            <button className={styles.ButtonWrap}>
              <div className="md">Find your Rate</div>

              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right-blue.svg"
                  alt="button arrow icon"
                />
              </div>
            </button>
          </div>

          <div className={styles.ServiceCard}>
            <div className={styles.ImgWrap}>
              <img
                src="images/home-service-img-five.svg"
                alt=" image of fifth service card"
              />
            </div>

            <div className={styles.ContentWrap}>
              <h5>First-Time Homebuyers</h5>

              <p className="body">
                Find out why VA Loans are ideal for Veterans and military
                families buying their first home.
              </p>
            </div>

            <button className={styles.ButtonWrap}>
              <div className="md">How It Works</div>

              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right-blue.svg"
                  alt="button arrow icon"
                />
              </div>
            </button>
          </div>

          <div className={styles.ServiceCard}>
            <div className={styles.ImgWrap}>
              <img
                src="images/home-service-img-six.svg"
                alt="image of sixth service card"
              />
            </div>

            <div className={styles.ContentWrap}>
              <h5>Start your Quote</h5>

              <p className="body">
                Join the thousands of Veterans who start their homeownership
                journey right here every day.
              </p>
            </div>

            <button className={styles.ButtonWrap}>
              <div className="md">Get Your Quote</div>

              <div className={styles.ArrowIcon}>
                <img
                  src="images/arrow-up-right-blue.svg"
                  alt="button arrow icon"
                />
              </div>
            </button>
          </div>
        </div>

        <div className={styles.ScrollIcon}>
          {/* ref={scrollIconRef}
          onClick={handleSecondRowClick} */}
          <div className={styles.scroller}></div>
        </div>
      </div>

      <div className={styles.ScrollIcon} onClick={handleClick}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
};

export default ServicesOverviewSection;
