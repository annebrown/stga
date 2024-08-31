import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Mission = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-5 md:pt-5 lg:pt-5">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 items-center">
            <div className="w-full px-4">
              <SectionTitle
                title="Our Mission"
                paragraph="Save The Grove Again is a community group committed to preserving the environmental and historical heart of Arnprior. Our aim is to promote awareness within the community about plans to develop a large portion of the adjacent land to The Gillies Grove, to maintain the integrity of this old growth forest, and preserve the historical origins of the town. We value a safe and healthy community where future generations can continue to learn, engage and share in lands that are biodiverse and rich in culture."
                mb="44px"
              />  
            </div>
            <div className="w-full px-4">
            <SectionTitle
                title="Contact Us"
                paragraph="Together we can find a better way!"
                mb="44px"
              />  
              <h2 className="text-center">EMAIL</h2>
              <p className="text-center">savethegroveagain@gmail.com</p>
              <h2 className="text-center">WEBSITE</h2>
              <p className="text-center">www.savethegroveagain.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
