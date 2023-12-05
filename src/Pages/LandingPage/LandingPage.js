import React from "react";
import {
  AboutSection,
  HeroSection,
  PartnerSection,
  PreSaleSection,
  TeamSection,
  TokenomicSection,
} from "./Sections";
import { Footer, Header } from "../../Components/UI";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <Header />
      <div className="landing-page__inner">
        <HeroSection />
        <PreSaleSection />
        <TokenomicSection />
        <AboutSection />
        <TeamSection />
        <PartnerSection />
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
