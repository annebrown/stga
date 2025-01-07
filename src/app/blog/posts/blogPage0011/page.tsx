
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";
import VideoLacy from "@/components/VideoLacy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Call to the Community",
  description: "STGA Chair Lacey Smith speaks from the heart",
  // other metadata
};

const BlogPage0011 = () => {
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
                        January 6, 2024
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            ACTION
                        </a>
                    </div>
                </div>

          
                    <p className="text-2xl">
                        <strong>A Call to the Community</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       STGA Chair Lacey Smith speaks from the heart
                    </p>
            

                    <Image
                    src="/images/blog/blog0011/blog11.svg"
                    alt="Child stands on large tree stump in wintery forest."
                    width="500"
                    height="450"
                    className="self-center w-full pb-8"
                />
               
                    <p className="mb-8">
                        
On a snowy winter&apos;s day, we all can find reasons to appreciate what a beautiful place we have at Gillies Grove. In this video, STGA chair Lacey Smith reaffirms her dedication to the Save the Grove Again initiative, and asks the community to do the same. With her two children by her side, we are reminded why it matters so much that we keep committed to this labor of love. 

                    </p>
                    <div className="mx-auto">
                        <iframe width="814" height="458" src="https://www.youtube.com/embed/CY2YkJNFaf0" title="A Call to the Community: Save the Grove Again Chair Lacey Smith speaks from the heart" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>

                    <p className="text-center pb-8 pt-8 text-2xl weight-bold pt-8 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>
    
        
      </section>

    </>
  );
};

export default BlogPage0011;
