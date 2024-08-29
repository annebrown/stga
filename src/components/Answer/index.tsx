// /src/components/Answer/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Answer = () => {
  return (
    <>
      <section
        id="answer"
        className="realtive z-30 mt-5 p-0 w-full"
      >
        <div className="
          flex
          mx-2
          
          items-center
          justify-center
          bg-gray-200
          rounded-xl
        ">

          <div className="
            w-1/2
            h-full
            text-justify
            p-0 m-0
            text-sm
            xs:text-base
            sm:text-lg
            md:text-2xl
            lg:text-3xl
            1xl:text-4xl
          ">
              <p className="ml-5 text-[#165D8F]">
                The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
              </p>
        <div className="flex text-base w-full mt-5 items-center justify-center
            text-xs
            xs:text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            1xl:text-1xl
        ">    
          <button className="p-2 m-2 bg-sky-200 rounded-lg hover:bg-white text-black shadow-md">Mailing List</button>
          <button className="p-2 m-2  bg-sky-200 rounded-lg hover:bg-white text-black shadow-md
             text-xs
            xs:text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            1xl:text-1xl
          ">Donations</button>
        </div>
          </div>

          <div className="w-1/2 p-5 py-6 m0">
            <Image
              src="/images/map.svg"
              alt="Logo"
              loading="eager"
              priority
              width={1930}
              height={1597}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Answer;
