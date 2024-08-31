// /src/components/Join/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Join = () => {
  return (
    <>
      <section id="Join" className="">
        <div className="clear-both z-30 grid grid-cols-2 gap-5 ml-1.5 mr-3 w-full center items-center justify-center">
          <div className="pl-5">
            <p className="
            text-black
              text-2xs
              xs:text-1xs
              sm:text-xs
              md:text-sm
              lg:text-base
              1xl:text-lg
            ">
              Join us as we gather together our collective love of this ecological and historical gem to counter the development proposal. Together we can find a better and more sustainable solution that meets the needs of all, including; the Galilee Center, a respected retreat center that has been entrusted with the care of this land for many years; the town’s folk who live nearby or use this area for their physical and spiritual wellbeing; the flora, fauna and fungi of the great and incredibly rare forest known as Gillies Grove; and the developer who needs to find ways to build homes for a growing Ontario population.
              <br /><br />
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
