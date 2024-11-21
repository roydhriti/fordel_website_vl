import React, { FC, useRef } from "react";
import styles from "./HomePage.module.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesOverviewSection from "../../shared/components/ServicesOverviewSection/ServicesOverviewSection";
import MortgageCalculatorSection from "./components/MortgageCalculatorSection/MortgageCalculatorSection";
import ReviewRatingSection from "./components/ReviewRatingSection/ReviewRatingSection";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const reviewsectionref = useRef(null);
  const aboutussectionref = useRef(null);
  const serviesoverviewsectionref = useRef(null);
  const mortgagecalculatorsection = useRef(null);

  return (
    <div className={styles.HomePage}>
      <HeroSection scrollRef={reviewsectionref} />

      <div ref={reviewsectionref}>
        <ReviewRatingSection scrollRef={aboutussectionref} />
      </div>

      <div ref={aboutussectionref}>
        <AboutUsSection scrollRef={serviesoverviewsectionref} />
      </div>

      <div ref={serviesoverviewsectionref}>
        <ServicesOverviewSection scrollRef={mortgagecalculatorsection} />
      </div>

      <div ref={mortgagecalculatorsection}>
        <MortgageCalculatorSection />
      </div>
    </div>
  );
};

export default HomePage;
