
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffeehouse: Katie Krelove: Special guest Katie Krelove from Ontario Wilderness Committee",
  description: "XXXXXXXX",
  // other metadata
};

const BlogPage0026 = () => {
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
                            January 26, 2026
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
                    <strong>Coffeehouse: Katie Krelove: Special guest Katie Krelove from Ontario Wilderness Committee</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    XXXXXXXX BI-LINE XXXXXXXX
                </p>
                
                <div className="mb-8">
                    <Image
                        src="/images/blog/blog26.svg"
                        alt="XXXXXXXX ALT XXXXXXXX"
                        width="500"
                        height="500"
                        className="self-center"
                    />
                </div>

                <p className="mb-8 text-justify">
                    It’s been awhile since our last coffeehouse and we are excited to start the new year by reconnecting and sharing in the lovely atmosphere of Cafe Tilda. 
                </p>

                <p className="mb-8 text-justify">
                    We have been busy forging many new relationships and partnerships over the past year and are thrilled to introduce you to one of those groups, the Wilderness Committee. It has been such a relief to finally find an organization whose sole purpose is ….drum roll please 🥁… ENVIRONMENTAL ADVOCACY!!!!! They are doing incredible work across this country at the grassroots level. Even better, they now have an Ontario Campaigner, Katie Krelove, and she will be joining us to speak about the work she has done right here in Ontario, with groups just like ours!
                </p>

                <p className="mb-8 text-justify">
                    Not only will Katie be sharing how other community advocacy work has been successful, she will also speak to ways that we can engage and animate our community as we work towards protecting the Grove from harmful development. There will also be a Q and A so that you can ask questions that you may have or share ideas of your own. Our committee members will also be available to discuss recent activities and volunteer opportunities.
                </p>

                <p className="mb-8 text-justify">
                    We look forward to welcoming you back to our Coffeehouse series. If you would like to submit a question in advance, please email us at savethegroveagain@gmail.com
                </p>


     

                <table className="w-full mb-8 gap-x-8 align-top">
                    <tbody>
                        <tr>
                            <td className="font-bold align-top">
                                What:
                            </td>
                            <td className="pl-4">
                                Coffeehouse: with special guest Katie Krelove from Ontario Wilderness Committee
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Date:
                            </td>
                            <td className="pl-4">
                                <p>Thursday January 29</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold align-top">
                                Time:
                            </td>
                            <td className="pl-4">
                                6:30 - 8:30pm *presentation will begin at 7:00pm followed by a Q and A
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Location:
                            </td>
                            <td className="pl-4">
                                <p>Cafe Tilda, 158 John St. North, Arnprior, ON </p>
                            </td>
                        </tr>

                    </tbody>
                </table>

           <p className="pt-8  pb-8 text-center text-2xl weight-bold text-[#165D8F] ">
                    Together we can find a better way!
                </p>
            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0026;
