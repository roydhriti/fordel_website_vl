import React, { FC, useRef } from "react";
import styles from "./VALoansPage.module.scss";
import VaLoanIntroSection from "./components/VaLoanIntroSection/VaLoanIntroSection";
import VaLoanTypesSection from "./components/VaLoanTypesSection/VaLoanTypesSection";
import VaLoanApplySection from "./components/VaLoanApplySection/VaLoanApplySection";
import VaLoanBenefitSection from "./components/VaLoanBenefitSection/VaLoanBenefitSection";
import VaLoanFaqSection from "./components/VaLoanFaqSection/VaLoanFaqSection";
import VaLoanEligibilitySection from "./components/VaLoanEligibilitySection/VaLoanEligibilitySection";
import VaLoanHeroSection from "./components/VaLoanHeroSection/VaLoanHeroSection";

interface VaLoansPageProps {}

const VaLoansPage: FC<VaLoansPageProps> = () => {
  const valoanstyperef = useRef(null);
  const valoansintroref = useRef(null);
  const valoansbenefitref = useRef(null);
  const valoansfaqref = useRef(null);
  const valoansapplyref = useRef(null);

  return (
    <div className={styles.VaLoansPage}>
      <VaLoanHeroSection scrollRef={valoansintroref} />

      <div ref={valoansintroref}>
        <VaLoanIntroSection scrollRef={valoanstyperef} />
      </div>

      <div ref={valoanstyperef}>
        <VaLoanTypesSection scrollRef={valoansapplyref} />
      </div>
      <VaLoanEligibilitySection />

      <div ref={valoanstyperef}>
        <VaLoanApplySection scrollRef={valoansbenefitref} />
      </div>

      <div ref={valoansbenefitref}>
        <VaLoanBenefitSection scrollRef={valoansfaqref} />
      </div>

      <div ref={valoansfaqref}></div>
      <VaLoanFaqSection />
    </div>
  );
};

export default VaLoansPage;
