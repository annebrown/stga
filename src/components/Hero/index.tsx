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
            className="relative m-0 p-0 pl-2 pr-2"
            src="/images/hero/splash.svg"
            alt="Field"
            loading="eager"
            priority
            width={3067}
            height={1556}
          />
          <div className="-mx-4 flex flex-wrap">


          <div className="mx-auto max-w-[800px] z-40">
            <Link href="/">
              <Image
                src="/images/hero/logo-sq-detail.svg"
                className="absolute top-5 right-20"
                sizes="(max-width: 200) 50px, 200px"
                alt="Logo"
                loading="eager"
                priority
                width={200}
                height={200}
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
