
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Grove Report",
  description: "August 2026",
};

const BlogPage0032 = () => {
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
                            August 18, 2026
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            NEWSLETTER
                        </a>
                    </div>
                </div>

          
                <p className="text-2xl">
                    <strong>The Grove Report</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    August 2026
                </p>
                
                <div className="mb-8">
                    <Image
                        src="/images/blog/blog0032/first.svg"
                        alt="Grove Roves Event Poster - Page 1"
                        width="755"
                        height="1000"
                        className="self-center mx-auto"
                    />
                </div>

               
                <div className="mb-8">
                    <Image
                        src="/images/blog/blog0032/second.svg"
                        alt="Grove Roves Event Poster - Page 2"
                        width="755"
                        height="1000"
                        className="self-center mx-auto"
                    />
                </div>

                <p className="pt-8  pb-8 text-center text-2xl weight-bold text-[#165D8F] ">
                    Together we can find a better way!
                </p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0032;
