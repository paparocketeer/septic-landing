import PageHeader from "../PageHeader";
import OurMission from "../sections/OurMission";
import WelcomeSection from "../sections/WelcomeSection";
import WhyUs from "../sections/WhyUs";

function AboutPage() {
  return (
    <>
      <PageHeader
        // image_url={"/about/about-1.jpg"}
        image_url={"/towel.jpg"}
        title={"About Us"}
        page={"about"}
      />
      <WelcomeSection />
      <OurMission />
      <WhyUs />
    </>
  );
}

export default AboutPage;
