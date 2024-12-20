import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodiversity Tour Success",
  description: "Amid a snowy backdrop, the diversity of this incredible land shone through!",
  // other metadata
};

const BlogPage0010 = () => {
  return (
    <>
      <section className="mx-auto pb-[60px] pt-[75px]">
        <div className="container">

            <div className=
                "mx-auto w-full px-4 md:w-8/12 lg:w-8/12 justify-center"
            >
                <div className="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                    <div className="flex flex-wrap items-center">
                        <p className="text-base font-medium text-black">
                            December 19, 2024
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
                        <strong>Biodiversity Tour Success</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       amid a snowy backdrop, the diversity of this incredible land shone through!
                    </p>
                    
                    <div className="aspect-[400/350]">
                        <Image
                            src="/images/blog/blog0010/blog10.svg"
                            alt="Concerned local citizens join in a beautiful wintery woodland setting."
                            width="500"
                            height="375"
                            className="self-center"
                        />
                    </div>
               
                    <p className="mb-8">
                    On December 15th, Save the Grove Again in collaboration with the Ottawa Field Naturalists Club, spent a delightful morning exploring and discovering the biodiversity that Gillies Grove and surrounding areas protect. This amazing walk was led by Owen Clarkin, an Ottawa based naturalist with a specialization in trees. We walked for hours, taking in the stately Eastern White Pines, the hallmark tree of this area. We located the tallest tree in Ontario and marveled at the community of trees contemporary in size (most just a few feet shorter) that surrounded it. We walked deep into the forest as well as explored the areas that were more open. We discussed the cycle of an old growth forest and how it stays healthy. But what was most poignant about this tour was how many different trees were found in such a short time. We were all amazed to learn that beyond the signature White Pine that one would expect here, we also found:
                    </p>
                    <ol>
                        <li>Eastern Hemlock</li>
                        <li>Basswood</li>
                        <li>Yellow Birch</li>
                        <li>Paper Birch</li>
                        <li>Iron Wood</li>
                        <li>Sugar Maple</li>
                        <li>Bur Oak</li>
                        <li>Red Oak</li>
                        <li>Aspen</li>
                        <li>Poplar</li>
                        <li>Black Walnut</li>
                        <li>Butternut</li>
                        <li>Red Maple</li>
                        <li>Balsam Fir</li>
                        <li>Beech</li>
                        <li>White Spruce</li>
                    </ol>
                    <div className="grid grid-cols-2 gap-4 mx-auto">
                        <Image
                            src="/images/blog/blog0010/body00.svg"
                            alt="Concerned local citizens join in a beautiful wintery woodland setting."
                            width="365"
                            height="500"
                            className="self-center"
                        />
                        <Image
                            src="/images/blog/blog0010/body01.svg"
                            alt="Concerned local citizens join in a beautiful wintery woodland setting."
                            width="500"
                            height="375"
                            className="self-center"
                        />
                    </div>
                    <p className="mb-8">
                    Dozens of shrubs and herbaceous plants were also identified. Imagine what incredible diversity there is to witness when the forest floor is not blanketed with snow! 
                    </p>
                    <p className="mb-8">
                    We would like to thank Owen Clarkin and the Ottawa Field Naturalist Club for coming to the Grove and sharing their expertise and passion. We are all richer for this knowledge and experience. 
                        </p>
                        <div className="mx-auto">
                        <Image
                            src="/images/blog/blog0010/body02.svg"
                            alt="Concerned local citizens join in a beautiful wintery woodland setting."
                            width="365"
                            height="500"
                        />
                    </div>
                    <p className="mb-8">
                    It is with hope that many generations to come have the opportunity to step into the wonder of this old-growth forest. Let&apos;s ensure that the adjacent land, which safeguards the forest&apos;s future, is protected from development that will inevitably harm the health and sustainability of this biodiverse haven.
                    </p>

                    <p className="text-center pb-8 text-2xl weight-bold pt-8 text-[#165D8F] ">Together we can find a better way!</p>
            </div>
        </div>
     
      </section>

    </>
  );
};

export default BlogPage0010;
