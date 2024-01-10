import IntroEarlySection from '@/components/desktop/early/intro-early-section';
import IntroSection from '@/components/desktop/intro/intro-section';
import IntroTrendSection from '@/components/desktop/trend/trend-section';
import React from 'react'

const RootPage = () => {
  return (
	  <>
		  <IntroSection />
		  <IntroTrendSection />
		  <IntroEarlySection/>
	  </>
	);
}

export default RootPage