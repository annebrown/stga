import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giving Thanks to the Grove!",
  description: "Silent Walk + Social Gathering",
  // other metadata
};

const BlogPage0006 = () => {
  return (
    <>
      <section className="pb-[60px] pt-[75px]">
        <div className="container">

            <div className="w-full px-4 lg:w-8/12">
              
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                Giving Thanks to the Grove
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
                        EVENT
                        </a>
                    </div>
                </div>

                <div className="text-black">
                    <p><strong>Silent Walk + Social Gathering</strong></p><br></br>
                    <p 
                        className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                    >
                        Join us as we come together as a community once again to show our dedication to protecting the Grove from future development. We will first take a silent walk together to appreciate our beloved old-growth forest and finish with a gathering to discuss next steps, answer questions and celebrate victories.
                    </p>
                    
                    <div className="aspect-[100/75] hidden">
                        <Image
                            src="/images/blog/blog0006/blog6.svg"
                            alt="Green Globe"
                            fill
                            className="w-10"
                        />
                    </div>

                
                    <div className="aspect-[75/100] hidden">
                        <Image
                            src="/images/blog/blog0006/blog6b.svg"
                            alt="Green Globe"
                            fill
                            className=""
                        />
                    </div>
               
                    <p className="mb-8 font-bold text-center">
                    Silent Walk
                    </p>

                    <p className="mb-8 text-center">
                        <strong>Where:</strong> Meet at the entrance to Gillies Grove (off Ottawa Street)
                    </p>
                    <p className="mb-8 text-center">
                        <strong>When:</strong> Sunday, October 6, 2024    
                    </p>

                    <p className="mb-8 text-center">
                        <strong>Time:</strong> Time: at 11:11 a.m    
                    </p> 

                    <p className="mb-8 text-center font-bold">
                        <strong>Social Gathering</strong>


Where: at Emmanuel Anglican Church (corner of Ottawa and Harrington) 
When: After the Walk on Sunday, October 6, 2024
Time: Estimated time is 11:40 
*Time could vary slightly

                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    This is the last paragraph.
                  </p>
                </div>
            </div>
          </div>

      </section>
    </>
  );
};

export default BlogPage0006;
