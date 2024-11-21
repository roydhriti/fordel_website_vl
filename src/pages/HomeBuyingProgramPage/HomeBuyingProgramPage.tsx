import React, { FC, useRef } from "react";
import styles from "./HomeBuyingProgramPage.module.scss";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import ReviewRatingSection from "./components/ReviewRatingSection/ReviewRatingSection";
import HomeBuyingHeroSection from "./components/HomeBuyingHeroSection/HomeBuyingHeroSection";
import ServicesOverviewSection from "../../shared/components/ServicesOverviewSection/ServicesOverviewSection";

interface HomeBuyingProgramPageProps {}

const HomeBuyingProgramPage: FC<HomeBuyingProgramPageProps> = () => {
  const serviesoverviewsectionref = useRef(null);
  const featuressectionref = useRef(null);
  const reviewsectionref = useRef(null);

  return (
    <div className={styles.HomeBuyingProgramPage}>
      <HomeBuyingHeroSection scrollRef={serviesoverviewsectionref} />

      <div ref={serviesoverviewsectionref}>
        <ServicesOverviewSection scrollRef={featuressectionref} />
      </div>

      <div ref={featuressectionref}>
        <FeaturesSection />
      </div>

      <div ref={reviewsectionref}>
        <ReviewRatingSection />
      </div>
    </div>
  );
};

export default HomeBuyingProgramPage;
