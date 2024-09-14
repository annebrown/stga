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
          <Image
            className="relative m-0 p-0 rounded-xl w-full"
            src="/images/hero/big-splash.svg"
            alt="Field surrounded by trees"
            loading="eager"
            priority
            width={1000}
            height={527}
          />
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto z-40 rounded-full">
              <Link href="/">
                <Image
                  src="/images/logo/logo-sq-detail.svg"
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
