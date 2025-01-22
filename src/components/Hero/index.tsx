// /src/components/Hero/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="z-30 m-0 p-0"
      >
        <div className="w-full h-full z-40 m-0 mt-5 p-0 fill">
          {/* <Image
            className="relative m-0 p-0 rounded-xl w-full"
            src="/images/hero/big-splash.webp"
            alt="Field surrounded by trees"
            loading="eager"
            priority
            width={500}
            height={264}
          /> */}
           <Image
            className="relative m-0 p-0 rounded-xl w-full"
            src="/images/hero/big-postcard.svg"
            alt="Postcard - Gilles Grove 10,000 years in the making"
            loading="eager"
            priority
            width={500}
            height={264}
          />
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto z-40 rounded-full">
              <Link href="/">
                <Image
                  src="/images/logo/logo_black_small.svg"
                  className="absolute top-10 right-10 w-1/5 h-auto"
                  alt="Logo - Trees and water inside a circle"
                  loading="eager"
                  priority
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
