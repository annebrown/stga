
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Stands up for Gillies Grove",
  description: "Ecological Study Needed",
  // other metadata
};

const BlogPage0015 = () => {
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
                            January 29, 2025
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            UPDATE
                        </a>
                    </div>
                </div>

          
                    <p className="text-2xl">
                        <strong>Community Stands up for Gillies Grove</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Ecological Study Needed
                    </p>
                    
                    <div className="w-2/3 mx-auto px-0">
                        <Image
                            src="/images/logo/logo_black_small.png"
                            alt="STGA Logo"
                            width="421"
                            height="421"
                            className="self-center"
                        />
                    </div>

                    <p className="mb-2 font-bold text-center leading-none">
                    &ldquo;Old-growth woodlands ... are the complex and ancient ecosystems where the true seeds of restoration lie&ldquo;
                    </p>
                    <p className="mb-8  text-center">
                    - Mary Reynolds, We Are the Ark
                    </p>




                    <p className="mb-8  text-justify">
                    For a standing room only crowd, Save the Grove Again&apos;s Lacey Smith brought forth our concerns and requests at the town council meeting Monday night. As Mayor McGee stated &apos;we don&apos;t often have too many visitors here&apos; referring to attendance at town council meetings. But the community showed just how much they care about the future of Gillies Grove, and council took notice. Thanks for all your support!
                    </p>

                    <iframe className="w-full my-8 mx-auto"
                    width="500" height="281" src="https://www.youtube.com/embed/EeT58Dk-RuY?si=qfy9kYiFmfOmpgJP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">January 27th, 2025 Regular Meeting of Council </iframe>

                    <p className="mb-8 text-justify w-md">
                    We have now made our formal request to have the Town conduct its own ecological study of the Grove. Lacey made it clear that we need to have this vital information as a community to be best equipped to protect Gillies Grove regardless of what it faces in the future.  It was left that research will be needed to know what options exist for such a study pre-emptive of a development proposal, Town Planner Alix Jolicoeur stated. These options would need to be brought to council at a later date.
                    </p>

                    <p className="mb-8  text-justify">
                    Let&apos;s continue this call for council to conduct a thorough ecological assessment! Join our postcard campaign and send your thoughts to the Town of Arnprior. More info <Link href="https://savethegroveagain.com/blog/posts/blogPage0013" className="text-[#38AF34]">here</Link>. 
                    </p>







                    <p className="pt-8  pb-8 
                    text-center text-2xl weight-bold text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0015;
