import Action from "@/components/Action";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved!",
  description: "",
};

const ActionPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get Involved!"
        description=""
      />
      <div className="w-full p-0 px-10 m-0">
        <Action />
      </div>
    </>
  );
};

export default ActionPage;
