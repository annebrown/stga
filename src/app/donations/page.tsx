import Breadcrumb from "@/components/Common/Breadcrumb";
import Donations from "@/components/Donations";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donations Page",
  description: "Save The Grove, Again accepts Interac E-Transfers",
  // other metadata
};

const DonationsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Donations Page"
        description="Donations are accepted via Interac E-Transfer."
      />

      <Donations />
    </>
  );
};

export default DonationsPage;
