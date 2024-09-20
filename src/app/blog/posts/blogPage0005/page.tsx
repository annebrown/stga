import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Opinion on Proposed Development",
  description: "Alberto Suárez-Esteban, Ph.D in Biology with a concentration in Plant Ecology and Conservation, M.Sc in Biodiversity, B.Sc.in Biology, speaks at the STGA Launch event on Saturday, September 7, 2024",
  // other metadata
};

const BlogPage0005 = () => {
    return (
        <>
        <section className="pb-[60px] pt-[75px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-8/12">
                
                        <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                            Expert Opinion on Proposed Development
                        </h2>
                        <div className="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4"
                        >
                            <div className="flex flex-wrap items-center">
                                <p className="text-base font-medium text-black">
                                    September 20, 2024
                                </p>
                            </div>
                        
                            <div className="mb-0">
                                <a
                                href="#0"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                                >
                                    Expert Witness
                                </a>
                            </div>
                        </div>

                        <div className="text-black">


                                <p className="font-bold"> 
                                    “At some point we need to show that we have the maturity to understand that what we do to our environment we do to ourselves because we are just a part of it”
                                </p>
                                <p className="text-right pb-10">
                                    -Alberto Suárez-Esteban, Ph.D, M.Sc, B.Sc.
                                </p>

                        </div>
                        <div className="mb-10 w-full overflow-hidden rounded">
                            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                <Image
                                    src="/images/blog/blog0005/blog5.svg"
                                    alt="image"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                
                        <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            In this video we learn from conservation biologist, Alberto Suárez-Esteban, that old-growth forests are locally, regionally and globally rare. Esteben also explains how the security and health of an old growth forest comes down to the available land it has to expand and grow. The land that has been proposed for sale has the potential to become a frontier for the expansion of Gillies Grove, securing its availability now and for future generations. 

                        </p>
                    
                        <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            However, currently we sit at a crossroads for the tangible future of Gillies Grove. In one direction we have a beacon for biodiversity, community networking and a thriving old-growth forest for generations to come. In the other we have more pavement, more noise and a town with a deteriorating forest. 
                        </p>
                        <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            This is why we call on the Town of Arnprior and its citizens to help Save the Grove Again. Let&apos;s be mature stewards of this land and work together to ensure the security of the forest&apos;s health and move towards a future in which Gillies Grove persists for many generations to come. Not only is Gillies Grove a rare part of nature, it is also Arnprior&apos;s heart. It&apos;s the central organ that connects, cleanses and provides vital nourishment to the people and animals of the town. 
                        </p>
                    
                        <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                            Let&apos;s keep the heart of Arnprior beating to benefit both current and future generations.
                        </p>
                        <p className="text-center mt-5 pb-10 text-2xl weight-bold pt-4 text-[#165D8F] ">
                            Together we can find a better way!
                        </p>
                        <p>VIDEO XXXXXXXXXXXXX</p><br />
                        <p><strong>
                            With our deepest appreciation we would like to thank Alberto Suárez-Esteban, Ph.D in Biology with a concentration in Plant Ecology and Conservation, M.Sc in Biodiversity, B.Sc.in Biology, for speaking at the Save the Grove Again launch event on Saturday, September 7, 2024.
                        </strong></p><br></br>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
    };      

    export default BlogPage0005;