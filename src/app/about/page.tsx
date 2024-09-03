import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description=""
      />
      <div className="w-full p-0 px-10 m-0">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
