import PageHeader from "../PageHeader";
import OurMission from "../sections/OurMission";
import WelcomeSection from "../sections/WelcomeSection";
import WhyUs from "../sections/WhyUs";

function AboutPage() {
  return (
    <>
      <PageHeader
        // image_url={"/about/about-header.jpg"}
        image_url={"/table.jpg"}
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
