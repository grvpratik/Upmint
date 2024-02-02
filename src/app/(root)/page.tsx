import React from "react";

import IntroEarlySection from "@/components/desktop/early/intro-early-section";
import IntroSection from "@/components/desktop/intro/intro-section";
import IntroTrendSection from "@/components/desktop/trend/trend-section";
import CallToAction from "@/components/call-to-action";
import GetFeatured from "@/actions/getFeatured";

const RootPage = async () => {
  const { result, error } = await GetFeatured();
  return (
    <>
      <IntroSection />
      <IntroTrendSection />
      <IntroEarlySection data={result} error={error} />
      <CallToAction />
    </>
  );
};

export default RootPage;
