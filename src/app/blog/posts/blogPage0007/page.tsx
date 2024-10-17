import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not a Done Deal!",
  description: "We don’t want a housing development beside and cutting into the Grove!",
  // other metadata
};

const BlogPage0007 = () => {
  return (
    <>
      <section className="pb-[60px] pt-[75px]">
        <div className="container">

            <div className="mx-auto w-full px-4 md:w-8/12 lg:w-8/12 justify-center">

                <div className="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                    <div className="flex flex-wrap items-center">
                        <p className="text-base font-medium text-black">
                            October 17, 2024
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                        VISION
                        </a>
                    </div>
                </div>

          
                    <p className="text-2xl"><strong>Not a Done Deal!</strong></p><br></br>
                    <p 
                        className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       This is not a Done Deal - we don&quot;t want a housing development beside and cutting into the Grove so what is our vision?
                    </p>
                    
                    <div className="aspect-[500/270] mb-8 self-center">
                        <Image
                            src="/images/blog/blog0007/blog7.svg"
                            alt="People walking a woodland path"
                            width="500"
                            height="270"
                        />
                    </div>
               
                    <p className="mb-8 text-center italic">
                        What perfect rule for happiness,—<br />
                        To live and help to live.<br />
                        <span className="underline">The Pines by Ruby Archer</span> <br />
                    </p>

                    <p className="mb-8">
                        Together we can find a better way, a way that includes the Grove expanding, a way that includes community, a way that considers food security and the health of the old growth forest for generations to come. Our vision is to see the Grove rewilding itself instead of becoming developed and diminished. Imagine with us a space that is public, not private property and aims to bring the community together, a place that would encourage and welcome community members and visitors of the Town of Arnprior to learn, heal and connect with nature forever.
                    </p>
                    <p className="mb-8 font-bold">
                        This vision can become a reality. The deal has not been finalized and we know there is power in the collective voice and collective action.
                    </p>
                    <p className="mb-8">
                        Right now, the most proactive thing we can all do is to continue to email Galilee, OMI Lacombe and Cavanagh. If you have already emailed them, please send a reminder letting them know that you still oppose this land being developed and have your voice heard. We support Community development, not housing development! More information, contact and templates can be found <a className="duration-300 hover:text-primary text-[#38AF34]" href="http://192.168.4.21:3003/action">here</a>.
                    </p>
                    <p className="mb-8">
                        In cooperation with the community, we still see the Nature Conservatory of Canada (NCC) as the most effective stewards of this land. Together we can build a future where the community gardens are expanded, the old-growth forest is left to grow and expand naturally and we honour the community use of this land as a place to connect and learn together.
                    </p>
                    <p className="mb-8">
                        There is always a solution. Let’s continue to work together “to live and help live”.
                    </p>
                    <p className="mb-8">
                        We would like to take a moment to thank all the local businesses (listed below) for their support in sharing posters and selling buttons, the media coverage we’ve received (links below) and the community members who are writing letters, initiating conversations and showing their support with lawn signs. We couldn’t do it without YOU! Thank you
                    </p>
                    <p className="mb-8 text-center">
                        Watch and Share our YouTube video <a href="https://www.youtube.com/embed/tEgtT1LX-Sk" className="duration-300 hover:text-primary text-[#38AF34]">What’s at Stake</a>
                    </p>
                    <p className="mb-8">
                        You can find the petition and buttons at the following local businesses:
                    </p>
                    <p className="mb-8 text-center">
                        Ottawa Valley Coffee<br />32 Elgin St. W.
                    </p>
                    <p className="mb-8 text-center">
                        Remax Office<br />215 Daniel St. S.
                    </p>
                    <p className="mb-8 text-center">
                        Ultimate Fitness Gym<br />4-53 James St
                    </p>
                    <p className="mb-8 text-center">
                        Tina’s Hair Shop<br />57C Madawaska St.
                    </p>
                    <p className="mb-8 text-center">
                        The Vintage Crate<br />159 John St. N.
                    </p>
                    <p className="mb-8 text-center">
                        Sweet & Sassy Cafe and Bistro<br />114 John St. N.
                    </p>
                    <p className="bg-orange-400 p-2">Consider Moving to separate blog page because, literally burying the headline.  lol</p>
                    <p className="mb-8">Latest News and Stories:</p>
                    <p className="bg-orange-400 p-2">Or continue here</p>

        

                    <p className="text-center pb-8 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
          </div>

      </section>
    </>
  );
};

export default BlogPage0007;
