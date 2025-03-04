import Events from "@/components/Events";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "STGA Events Calendar",
};

const EventsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get Involved!"
        description=""
      />
      <div className="h-[600px] mx-auto p-20">
        <Events />
      </div>
    </>
  );
};

export default EventsPage;
