"use client";

import { useTheme } from "next-themes";

const DonationsBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Your donation will be used to pay for:
          Print Materials
          ???
      </p>
    </div>
  );
};

export default DonationsBox;
