import Breadcrumb from "@/components/Common/Breadcrumb";
import Donations from "@/components/Donations";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donations Page",
  description: "How to donate to Save The Grove, Again",
  // other metadata
};

const DonationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Donations Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Donations />
    </>
  );
};

export default DonationsPage;
