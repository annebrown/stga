// /src/components/About/index.tsx
import Link from "next/link";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section
        id="About"
        className="realtive z-30 mt-5 p-0 w-full"
      >
        <div>
          
          <h2 className="text-3xl bold text-center">Our Mission</h2>

          <p  className="text-justify pt-5">
            Save The Grove Again is a community group committed to preserving the environmental and historical heart of Arnprior. Our aim is to promote awareness within the community about plans to develop a large portion of the adjacent land to The Gillies Grove, to maintain the integrity of this old growth forest, and preserve the historical origins of the town. We value a safe and healthy community where future generations can continue to learn, engage and share in lands that are biodiverse and rich in culture.
          </p>

          <h2 className="text-3xl bold text-center pb-5">Contact Us</h2>
         
              <h2 className="text-xl bold text-center">EMAIL</h2>
              <p className="text-center pb-5">savethegroveagain@gmail.com</p>
              <h2 className="text-xl bold text-center">WEBSITE</h2>
              <p className="text-center pb-5">www.savethegroveagain.com</p>
              <p className="text-center pb-5">Together we can find a better way!</p>
        </div>
      </section>
    </>
  );
};

export default About;
