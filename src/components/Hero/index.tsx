// /src/components/Hero/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="z-30  m-0 p-0"
      >
        <div className="w-full h-full z-40 m-0 p-0">
          <Image
            className="relative m-0 p-0 pl-0.5 pr-1"
            src="/images/hero/splash.svg"
            alt="Field"
            loading="eager"
            priority
            width={3067}
            height={1556}
          />
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto z-40">
              <Link href="/">
                <Image
                  src="/images/hero/logo-sq-detail.svg"
                  className="absolute top-10 right-10 w-1/5 h-auto"
                  alt="Logo"
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
