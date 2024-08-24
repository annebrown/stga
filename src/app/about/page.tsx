import Mission from "@/components/About/Mission";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | About STGA",
  description: "Save the Grove Again, Petition Initiative",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Save the Grove Again, Petition Initiative."
      />
      <Mission />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
