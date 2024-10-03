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

            <div className="mx-auto w-full px-4 md:w-8/12 lg:w-8/12 justify-center">
              
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

          
                    <p className="text-2xl"><strong>Silent Walk + Social Gathering</strong></p><br></br>
                    <p 
                        className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                        Join us as we come together as a community once again to show our dedication to protecting the Grove from future development. We will first take a silent walk together to appreciate our beloved old-growth forest and finish with a gathering to discuss next steps, answer questions and celebrate victories.
                    </p>
                    
                    <div className="aspect-[100/75] mb-10 self-center">
                        <Image
                            src="/images/blog/blog0006/blog6.svg"
                            alt="Green Globe"
                            width="1000"
                            height="750"

                        />
                    </div>
               
                    <p className="mb-8 text-center font-bold text-2xl">
                        Silent Walk
                    </p>

                    <p className="mb-2 text-center">
                        <strong>Where:</strong> Meet at the entrance to Gillies Grove (off Ottawa Street)
                    </p>
                    <p className="mb-2 text-center">
                        <strong>When:</strong> Sunday, October 6, 2024    
                    </p>

                    <p className="mb-8 text-center">
                        <strong>Time:</strong> Time: at 11:11 a.m    
                    </p> 


                    <p className="mb-8 text-center font-bold text-2xl">
                        <strong>Social Gathering</strong>
                    </p>

                    <p className="mb-2 text-center">
                        <strong>Where:</strong> at Emmanuel Anglican Church (corner of Ottawa and Harrington)
                    </p>
                    <p className="mb-2 text-center">
                        <strong>When:</strong> After the Walk on Sunday, October 6, 2024  
                    </p>

                    <p className="mb-2 text-center">
                        <strong>Time:</strong> Estimated time is 11:40    
                    </p> 

                    <p className="mb-8 text-center text-xs">
                        *Time could vary slightly
                    </p>
                   

                    <p className="mb-8 text-center italic">
                    We encourage any and all to attend the social event following the silent walk. The walk is not mandatory to attend the social gathering.
                    </p>

                    <p className="mb-15 text-center font-bold text-2xl">
                        This is more than just an event—it is a call to action!
                    </p>

                    <div className="mb-10 mt-10 self-center">
                        <Image
                            src="/images/blog/blog0006/blog6b.svg"
                            alt="Looking up through very tall deciduous trees"
                            width="750"
                            height="1000"
                        />
                    </div>

                    <p className="mb-8">
                        Our campaign to save the Grove is gaining momentum, and with your support, we are confident that we can stop the development.
                    </p>
                    <p className="mb-8">
                        As we approach Thanksgiving, this silent walk is an opportunity to reflect on the deep history of the Grove, to reaffirm our dedication to preserving it for future generations and a moment for the Community to come together again and continue to take one step at a time towards a better way!

                    </p>
                    <p className="mb-8">
                    Let’s keep Growing and ensure that Gillies Grove remains a sanctuary for generations to come.
                    </p>
                    <p className="text-center pb-8 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
          </div>

      </section>
    </>
  );
};

export default BlogPage0006;
