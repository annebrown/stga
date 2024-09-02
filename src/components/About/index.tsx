// /src/components/About/index.tsx
import Link from "next/link";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section id="About" className="realtive z-30 mt-5 p-0 w-full">
          
          <h2 className="text-3xl font-bold text-center">Our Mission</h2>

          <p  className="text-justify py-5">
            Save The Grove Again is a community group committed to preserving the environmental and historical heart of Arnprior. Our aim is to promote awareness within the community about plans to develop a large portion of the adjacent land to The Gillies Grove, to maintain the integrity of this old growth forest, and preserve the historical origins of the town. We value a safe and healthy community where future generations can continue to learn, engage and share in lands that are biodiverse and rich in culture.
          </p>

          <p className="text-center pb-5 text-xl">Together we can find a better way!</p>

      </section>
    </>
  );
};

export default About;
