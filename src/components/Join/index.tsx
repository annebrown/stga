// /src/components/Join/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Join = () => {
  return (
    <>
      <section id="Join" className="clear-both">
        <div className=" w-full z-30 ml-1.5 mr-3 pt-5 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          <div className="pl-5">
            <p className="pt-5
            text-black
              text-2xs
              xs:text-1xs
              sm:text-xs
              md:text-sm
              lg:text-base
              1xl:text-lg
            ">
              Join us as we gather together our collective love of this ecological and historical gem to counter the development proposal. Together we can find a better and more sustainable solution that meets the needs of all, including; the Galilee Center, a respected retreat center that has been entrusted with the care of this land for many years; the town’s folk who live nearby or use this area for their physical and spiritual wellbeing; the flora, fauna and fungi of the great and incredibly rare forest known as Gillies Grove; and the developer who needs to find ways to build homes for a growing Ontario population.
              </p><br />
              <p className="
               bold
              text-[#165D8F]
              text-sm
              xs:text-base
              sm:text-lg
              md:text-1xl
              lg:text-2xl
              1xl:text-3xl
               
               ">
                Together we can find a better way!
            </p>
          </div>
          <div className="m-5">
            <Image
              className=""
              src="/images/vignette.svg"
              alt="Field"
              loading="eager"
              priority
              width={830}
              height={760}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
