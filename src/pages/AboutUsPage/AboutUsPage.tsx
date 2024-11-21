import React, { FC, useRef } from "react";
import styles from "./AboutUsPage.module.scss";
import MissionVisionSection from "./components/MissionVisionSection/MissionVisionSection";
import CompanyHistorySection from "./components/CompanyHistorySection/CompanyHistorySection";
import OurSevicesSection from "./components/OurSevicesSection/OurSevicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import CommunityInvolvementSection from "./components/CommunityInvolvementSection/CommunityInvolvementSection";
import ContactInformationSection from "./components/ContactInformationSection/ContactInformationSection";
import AboutHeroSection from "./components/AboutHeroSection/AboutHeroSection";

interface AboutUsPageProps {}

const AboutUsPage: FC<AboutUsPageProps> = () => {
  const whychooseusref = useRef(null);
  const missionvissionref = useRef(null);
  const contactref = useRef(null);
  // const mortgagecalculatorsection = useRef(null);

  return (
    <div className={styles.AboutUsPage}>
      <AboutHeroSection scrollRef={whychooseusref} />

      <div ref={whychooseusref}>
        <WhyChooseUsSection scrollRef={missionvissionref} />
      </div>

      <div ref={missionvissionref}>
        <MissionVisionSection scrollRef={contactref} />
      </div>

      <div ref={contactref}>
        <ContactInformationSection />
      </div>

      {/* <CompanyHistorySection />
      <OurSevicesSection />
      <CommunityInvolvementSection /> */}
    </div>
  );
};

export default AboutUsPage;
