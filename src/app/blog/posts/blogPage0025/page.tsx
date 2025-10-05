
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grove Roves: Spooky Edition!",
  description: "Come out to hear about the dark tales of Arnprior and the night creatures of Gillies Grove!",
  // other metadata
};

const BlogPage0025 = () => {
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
                            October 5, 2020
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

          
                    <p className="text-2xl">
                        <strong>Grove Roves: Spooky Edition!</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Come out to hear about the dark tales of Arnprior and the night creatures of Gillies Grove!
                    </p>
                    
                    <div className="mb-8">
                        <Image
                            src="/images/blog/blog24.png"
                            alt="Event Poster"
                            width="500"
                            height="500"
                            className="self-center"
                        />
                    </div>






                    <p className="mb-8 text-justify">
                        Join the Friends of the Grove for another entertaining and informative wander through Gillies Grove, this time at night! Bring your lanterns (no flames please, just battery-powered) and learn some truly remarkable facts, all of a more sinister nature! The night will start out with ghost stories and some spooky fables of Arnprior's past . Then no dark history tour of Arnprior is complete without learning about its infamous founder, the Laird Archibald McNab. Jim Austin, historian and curator of the Waba Cottage in White Lake, will be a guest speaker. Jim is an expert on the scandalous McNab, a topic he is truly passionate about. 
                    </p>

                    <p className="mb-8 text-justify">
                        The tour then ventures into Gilles Grove itself where Brian Hickey of the River Institute in Cornwall will be joining.  As a research scientist and education programme leader, he specializes in bat education and will be sharing some of that expert knowledge. There will be opportunities to witness bats in action if the night is warm, and Brian will bring detectors to hear their special calls! Other nocturnal species will also be investigated during this forest tour such as moths and owls.  What a treat to learn about the creatures that roam at night in Gillies Grove!
                    </p>

                    <p className="mb-8 text-justify">
                        The tour then ventures into Gilles Grove itself where Brian Hickey of the River Institute in Cornwall will be joining.  As a research scientist and education programme leader, he specializes in bat education and will be sharing some of that expert knowledge. There will be opportunities to witness bats in action if the night is warm, and Brian will bring detectors to hear their special calls! Other nocturnal species will also be investigated during this forest tour such as moths and owls.  What a treat to learn about the creatures that roam at night in Gillies Grove!
                    </p>

                <table className="w-full mb-8 gap-x-8 align-top">
                    <tbody>
                        <tr>
                            <td className="font-bold align-top">
                                When:
                            </td>
                            <td className="pl-4">
                                 October 18 at 6:00pm
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Where:
                            </td>
                            <td className="pl-4">
                                <p>Meeting at the end of Harrington Street in Arnprior.</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold align-top">
                                What:
                            </td>
                            <td className="pl-4">
                                A 90-120 minute walk and talk. Please bring proper footwear, ample water and a light source for when it gets dark.
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Cost:
                            </td>
                            <td className="pl-4">
                                <p>Free! But please consider bringing a donation to help pay for the expenses of our guides on this tour.</p>
                            </td>
                        </tr>

                    </tbody>
                </table>

                    <p className="mb-8 text-justify">
                        Hope to see you on the trail!
                    </p>



                    <p className="pt-8  pb-8 
                    text-center text-2xl weight-bold text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0025;
