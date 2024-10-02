import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gig News!",
  description: "Arnprior Releases ALL Available Land for Greenspace!",
  // other metadata
};

const BlogPage0006 = () => {
  return (
    <>
      <section className="pb-[60px] pt-[75px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                    Big News!
                </h2>
                <div className="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                    <div className="flex flex-wrap items-center">
                        <p className="text-base font-medium text-black">
                            October 2, 2024
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                        SOME TAG
                        </a>
                    </div>
                </div>

                <div className="text-black">
                  <p><strong>Big News!</strong></p><br></br>
                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Arnprior Releases ALL Available Land for Greenspace
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog0006/blog6.svg"
                        alt="Green Globe"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Another paragraph here.
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    YAP
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    This is the last paragraph.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage0006;
