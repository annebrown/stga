
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Importance of Urban Forests",
  description: "Coffeehouse with Marshall Buchanan",
};

const BlogPage0027 = () => {
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
                            February 26, 2026
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
                    <strong>The Importance of Urban Forests</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                     Coffeehouse with Marshall Buchanan
                </p>
                
                <div className="mb-8">
                    <Image
                        src="/images/blog/blog27.png"
                        alt="26-02-26 Event Poster"
                        width="386"
                        height="500"
                        className="self-center mx-auto"
                    />
                </div>

                <p className="mb-8 text-justify">
                    Last month&apos;s coffeehouse with Katie Krelove from the Wilderness Committee was a great kickstart to the year. In case you missed it, here are some key takeaways:
                </p>

                <ol className="mb-8 text-justify list-decimal list-outside pl-5">
                    <li>Land Use Planning IS a public process.  </li>
                    <li className="font-bold">It is NEVER a &apos;done deal&apos;!  </li>
                    <li className="justify-left">There are many success stories across Ontario of communities coming together and successfully stopping unwanted development.  </li>
                    <li>The same success CAN happen here.</li>
                </ol>

                <p className="mb-8 text-justify">
                    This month we welcome Registered Professional Forester, Marshall Buchanan (see more info below), who will be presenting on the importance of urban forests. We&apos;ve focused a lot on Gillies Grove being an old-growth forest and the ecological value as an endangered ecosystem. We also know it is highly unique to have an old-growth forest in the midst of a town. Now we get to learn why its location makes it important and discover what other potential treasures it holds.                 </p>

                <p className="mb-8 text-justify">
                    Marshall&apos;s presentation will start at 7:00 pm and will be followed by a Q and A, open discussion. Our committee members will also be available to answer questions, discuss recent activities and volunteer opportunities for those interested.
                </p>

                <p className="mb-8 text-justify">
                    We look forward to welcoming you to an evening of community and insight. If you would like to submit a question in advance, please email us at savethegroveagain@gmail.com.
                </p>

                <table className="w-full mb-8 gap-x-8 align-top">
                    <tbody>
                        <tr>
                            <td className="font-bold align-top">
                                What:
                            </td>
                            <td className="pl-4">
                                 Coffeehouse: with special guest Marshall Buchanan
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Date:
                            </td>
                            <td className="pl-4">
                                <p>Thursday February 26th</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold align-top">
                                Time:
                            </td>
                            <td className="pl-4">
                                6:30 - 8:30pm <br/> Presentation will begin at 7:00pm followed by a Q and A.
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Location:
                            </td>
                            <td className="pl-4">
                                <p>Cafe Tilda, 158 John St. North, Arnprior, ON</p>
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

export default BlogPage0027;
