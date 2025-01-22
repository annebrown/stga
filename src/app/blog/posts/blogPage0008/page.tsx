
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Response to Cavanagh's Announcement",
  description: "STGA is not surprised, not deterred",
  // other metadata
};

const BlogPage0008 = () => {
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
                            October 31, 2024
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            IMPORTANT NEWS
                        </a>
                    </div>
                </div>

          
                <p className="text-2xl">
                    <strong>Response to Cavanagh&apos;s Announcement</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    STGA is not surprised, not deterred
                </p>
                
                <div className="aspect-[500/280]">
                    <Image
                        src="/images/blog/blog0008/blog8.webp"
                        alt="Sundrenched Woodland Path"
                        width="500"
                        height="280"
                        className="self-center w-full pb-8"
                    />
                </div>
            
                <p className="mb-8">

                <strong>
                    Save the Grove Again is &apos;not surprised and not deterred&apos;</strong> regarding Cavangh&apos;s recent announcement of plans to proceed with the purchase of the 20 acres of Galilee Center land bordering the Gillies Grove Nature Reserve.
                </p>
                <p className="mb-8">               
                    On Monday October 21st Cavangh announced that they will be moving ahead with the purchase of this land, confirming that a housing development is in their plans. Though disappointed to hear this, Save the Grove Again is more committed than ever to protecting the Grove and countering any plans for development in its vicinity. 
                </p>
                <p className="mb-8">  
                    “This latest move by Cavanagh only strengthens our resolve to protect this irreplaceable land,” said Lacey Smith, Chair of Save the Grove Again. “We do not see this as a done deal, but rather as an opportunity to further engage the community and other partners in a constructive dialogue. We are confident that together we can find a solution that satisfies all parties while ultimately saving the Grove once again.”
                </p>
                <p className="mb-8">  
                    With many steps still to take, Save the Grove Again will be there to be the voice of the community and help to steer this in the right direction. And with nearly 4400 signatures on our petition (both digital and hard-copy), there is ample support for our collective goals.
                </p>
                <p className="mb-8">  
                    Find below the links to the various interviews conducted with the media last week. Our concerns are reaching beyond our borders and appealing to so many people. Please share near and far!
                </p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/9YEOtLDpBBw?si=lnuaS_u4fnT2XQhl" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className="size-full aspect-video"></iframe>

                <br />
                <h2>CTV News - October 23, 2024 </h2>
                <Link href="https://ottawa.ctvnews.ca/developer-finalizing-purchase-of-land-next-to-arnprior-s-gillies-grove-forest-1.7084023" className="duration-300 hover:text-primary text-[#38AF34]">
                <p>Developer finalizing purchase of land next to Arnprior&apos; Gillies Grove forest</p></Link>

                <br />
                <h2>Ottawa Citizen - October 21, 2024 </h2>
                <Link href="https://ottawacitizen.com/news/local-news/developer-going-ahead-with-purchase-of-land-next-to-arnprior-old-growth-forest" className="duration-300 hover:text-primary text-[#38AF34]">
                <p>Developer going ahead with purchase of land next to Arnprior old-growth forest</p></Link>


                <br />
                <h2>Arnprior Today - October 23, 2024 </h2>
                <Link href="https://arnpriortoday.ca/2024/10/23/68133/" className="duration-300 hover:text-primary text-[#38AF34]">
                <p>Save the Grove Again: Not Surprised, Not Deterred</p></Link>

                <p className="text-center pb-8 text-2xl weight-bold pt-8 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

        
      </section>

    </>
  );
};

export default BlogPage0008;
