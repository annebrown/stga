// /src/components/Join/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Join = () => {
  return (
    <>
      <section id="Join" className="z-30">
        <div className="relative float-left w-1/2 pl-10 items-center justify-cente">
          <p className="">
            Join us as we gather together our collective love of this ecological and historical gem to counter the development proposal. Together we can find a better and more sustainable solution that meets the needs of all, including; the Galilee Center, a respected retreat center that has been entrusted with the care of this land for many years; the town’s folk who live nearby or use this area for their physical and spiritual wellbeing; the flora, fauna and fungi of the great and incredibly rare forest known as Gillies Grove; and the developer who needs to find ways to build homes for a growing Ontario population.
            <br /><br />
            Together we can find a better way!
          </p>
        </div>
        <div className="relative float-right w-1/2 p-0 m-0">
          <Image
            className=""
            src="/images/vignette.jpg"
            alt="Field"
            loading="eager"
            priority
            width={4500}
            height={3477}
          />
        </div>
      </section>
    </>
  );
};

export default Join;
