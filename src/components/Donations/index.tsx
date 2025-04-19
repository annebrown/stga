// /src/components/Donations/index.tsx
import Link from "next/link";
import Image from 'next/image';

const Donations = () => {
  return (
    <>
      <section id="Donations" className="realtive z-30 mt-5 p-0 w-full text-black">
          
            <div className="text-center px-20">
                <p className="text-left py-2">
                If you would like to support Save the Grove Again please consider making a donation.
                </p>
                <p className="text-left py-2">
                Donations are used to cover the cost of materials including lawn signs, flyers, posters, buttons, website domain name etc. 
                </p>
                <p className="text-left py-2">
                Donations are accepted via Interac E-Transfer. Please send your contribution to:  <a href="mailto:savethegroveagain@gmail.com" className="text-green-600">savethegroveagain@gmail.com</a>
                </p>
                <p className="text-left py-2">
                If you are not able to make a donation and would like to help in another way, please fill out our  
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link" className="text-green-600"> volunteer form</Link>.
                </p>

                <div className="py-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    <Image
                        className="relative m-0 p-0 rounded-xl w-150px"
                        src="/images/blog/blog0002/lady-button-and-sign.svg"
                        alt="Field"
                        loading="eager"
                        priority
                        width={408}
                        height={544}
                    />
                    <Image
                        className="relative m-0 p-0 rounded-xl w-150px"
                        src="/images/blog/blog0002/table-and-materials.svg"
                        alt="Field"
                        loading="eager"
                        priority
                        width={408}
                        height={544}
                    />
                    <Image
                        className="relative m-0 p-0 rounded-xl w-150px"
                        src="/images/blog/blog0002/lawn-sign.svg"
                        alt="Field"
                        loading="eager"
                        priority
                        width={408}
                        height={544}
                    />
                </div>
            </div>
      </section>
    </>
  );
};

export default Donations;
