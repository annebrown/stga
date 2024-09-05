import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donations Page",
  description: "Save The Grove, Again accepts Interac E-Transfers",
};

const DonationsPage = () => {
  return (
    <>
        <Breadcrumb
            pageName="Donations Page"
            description="Donations are accepted via Interac E-Transfer"
        />
        <p className="mb-12 ml-10 pl-20 text-base font-medium text-black">
            E-Transfer <strong>Send To</strong> Address: <span className="weight-bold text-1xl">savethegroveagain@gmail.com</span>
        </p>
    </>
  );
};

export default DonationsPage;
