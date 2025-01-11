
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Don't It Always Seem to Go ...",
  description: "Let's rewrite this song together!",
  // other metadata
};

const BlogPage0012 = () => {
  return (
    <>
      <section className="pb-[60px] pt-[75px]">
        <div className="container">

            <div className=
                "mx-auto w-full px-4 md:w-8/12 lg:w-8/12 justify-center"
            >
                <div className="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                    <div className="flex flex-wrap items-center">
                        <p className="text-base font-medium text-black">
                            January 16, 2025
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            Event
                        </a>
                    </div>
                </div>

          
                    <p className="text-2xl">
                        <strong>Don&apos;t It Always Seem to Go ...</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Let&apos;s rewrite this song together!
                    </p>
                    
                    <div className="aspect-[500/270] mb-8">
                        <Image
                            src="/images/blog/blog0012/blog12.svg"
                            alt="XXXXXXXX"
                            width="500"
                            height="375"
                            className="self-center"
                        />
                    </div>
               
                    <p className="mb-8">
                        We would like to invite you all to our next community meeting. Everyone is welcome and encouraged to attend. We will share what has been happening behind the scenes for the past 3 months, what the next steps are and the many ways that you can actively participate in our collective goal - <em>to protect and expand the old-growth forest for future generations</em>.
                        </p>

                        <div className="text-black mb-8">
                            <p className="pb-1"><strong>What:</strong> Community Meeting</p>
                            <p className="pb-1"><strong>When:</strong> Thursday January 16th at 6:00pm</p>
                            <p className="pb-1"><strong>Where: </strong>Arnprior Public Library, 21 Madawaska St, Arnprior</p>
                        </div>

                        <p className="mb-8">
                            Whether you can join us in person or not on January 16, please consider supporting this cause in the following ways:
                        </p>

                        <ul className="mb-8">
                            <li>💚 Share this information with other community members</li>
                            <li>💚 Wear a button</li>
                            <li>💚 Talk to your friends and family about the importance of old-growth forests </li>
                            <li>💚 Subscribe to our subscribe to our <a className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</a>.</li>
                            <li>💚 Fill out our <a  className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link"> volunteer form</a></li>
                            <li>💚 Like and follow our <a href="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/">Facebook page</a></li>
                            <li>💚 Subscribe to our <a href="https://www.youtube.com/@SaveTheGroveAgain">You Tube channel</a></li>
                            <li>💚 Make a donation via e-transfer to  <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34] hover:text-primary">savethegroveagain@gmail.com</a></li>
                        </ul>
                        <p className="mb-8">
                            We look forward to connecting with you all on Thursday and building community together.

                        </p>
                        <p className="font-extrabold text-red-500">
                            &ldquo;Maybe trees have a right to sometimes grow old. &ldquo;</p>
                        <p className="mt-0 mb-8">
                            - from Ontario &quot;s Old-Growth Forests by <em>Michael Henry</em> and <em>Peter Quinby</em>
                        </p>

                    <p className="text-center pb-8 text-2xl weight-bold pt-8 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0012;
