import React from "react";

import IntroEarlySection from "@/components/desktop/early/intro-early-section";
import IntroSection from "@/components/desktop/intro/intro-section";
import IntroTrendSection from "@/components/desktop/trend/trend-section";
import CallToAction from "@/components/call-to-action";


const RootPage = () => {
  return (
    <>
      <IntroSection />
      <IntroTrendSection />
      <IntroEarlySection />
      <CallToAction />
    </>
  );
};

export default RootPage;
