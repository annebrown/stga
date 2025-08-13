import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join another Grove Rove this weekend!",
  description: "Grove Roves: free guided tour in Gillies Grove old-growth forest. It’s Accessible August: stroll wheelchair, walker, and stroller accessible paths in an ancient forest, at a gentle pace."
};

const BlogPage0024 = () => {
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
                            August 13, 2025
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
                    <strong>Join another Grove Rove this weekend!</strong>
                </p><br/><br/>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    Grove Roves: free guided tour in Gillies Grove old-growth forest. It’s Accessible August: stroll wheelchair, walker, and stroller accessible paths in an ancient forest, at a gentle pace.
                </p>
                
                <div className="mb-8 mx-auto">
                    <Image
                        src="/images/blog/blog24.png"
                        alt="Forest Meadow"
                        width="375"
                        height="500"
                        className="mx-auto"
                    />
                </div>

                <p className="mb-8 text-justify">
                    Have you ever imagined traveling back in time? Been curious about what it was like 100 years, 1000 years, or 10,000 years ago? Join a guided tour to learn about a dynamic landscape that has been shaped by glaciers, oceans, and rivers, and enjoyed and preserved by countless communities. Access a dynamic and ancient forest on level paths at a gentle pace. You will have opportunities to observe nature, exercise your senses, and learn some delightful details. We welcome you to hear local stories, and we invite you to share yours, too. 
                </p>

                <p className="mb-8 text-justify">
                   What’s included: an amateur naturalist and experienced guide, first aid trained and certified, will be leading folks along the trails to share interesting details about this special forest. 
                </p>

                <p className="mb-8 text-justify">
                    Who the event is for: beginners, adventurers, nature-lovers, serenity-seekers, families, social butterflies, storytellers and the curious. 
        
                </p>

                <table className="w-full mb-8 gap-x-8 align-top">
                    <tbody>
                        <tr>
                            <td className="font-bold align-top">
                                What:
                            </td>
                            <td className="pl-4">
                                Grove Roves - free guided community forest walks
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Date:
                            </td>
                            <td className="pl-4">
                                <p>Saturday August 16 - Theme: Accessing the Forest </p>
                                <p>Saturday Sept 20</p>
                                <p>October 18 - Theme: The dark side of the riverbanks</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold align-top">
                                Time:
                            </td>
                            <td className="pl-4">
                                9:00 am
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Location:
                            </td>
                            <td className="pl-4">
                                <p>Gillies Grove Nature Reserve, </p>
                               <p> 154 Ottawa St, Arnprior, ON </p>
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Distance:
                            </td>
                            <td className="pl-4">
                                <p>2 km. </p>
                                <p>There will be opportunities to shorten your experience and head back to the parking lot, if a shorter trek is what you prefer. </p>
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Duration:
                            </td>
                            <td className="pl-4">
                                60 minutes
                            </td>
                        </tr>


                        <tr>
                            <td className="font-bold align-top">
                                Cost:
                            </td>
                            <td className="pl-4">
                                <p>Free! No registration necessary.</p>
                                 <p>If you would like to make a donation, we would be happy to put it towards the Save the Grove, Again initiatives for protecting this forest from current threats of development. </p> 
                            </td>
                        </tr>

                    </tbody>
                </table>

                    <p className="mb-8 text-justify">
                       I hope to see you on the trail!
                    </p>

                    <p className="pt-8  pb-8 
                    text-center text-2xl weight-bold text-[#165D8F] ">
                        Together we can find a better way!
                    </p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0024;
