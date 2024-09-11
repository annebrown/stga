// /src/components/About/index.tsx
import Link from "next/link";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section id="About" className="realtive z-30 mt-0 p-0 w-full text-black">
          
            <h2 className="text-3xl pb-3 font-bold text-center">Our Mission</h2>
            <div className="text-center px-20">
                <p className="text-left py-2">
                    We are a group of concerned residents committed to preserving Gillies Grove and the land adjacent to the Grove which constitute the environmental and historic heart of Arnprior.
                </p>
                <p className="text-left py-2">
                    We envision a safe and healthy community where future generations can continue to learn from, engage with and share access to lands, such as Gillies Grove, that are biodiverse and rich in history and culture. 
                </p>
                <p className="text-left py-2">
                    To achieve our vision, we will promote community awareness about plans to commercially develop a large portion of the land adjacent to Gillies Grove. We will also advocate for informed and responsible decision-making concerning these plans to ensure the continued public enjoyment of this important site for years to come. 
                </p>
            </div>
          <p className="text-center pb-10 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

      </section>
    </>
  );
};

export default About;
