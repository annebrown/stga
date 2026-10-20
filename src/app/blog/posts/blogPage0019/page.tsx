
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "'Call of the Forest' The Forgotten Wisdom of Trees",
  description: "Come out to watch this beautiful film on the significance of ancient forests!",
  // other metadata
};

const BlogPage0019 = () => {
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
                            March 31, 2025
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            Event
                        </a>
                    </div>
                </div>
                <div >
          
                    <p className="text-2xl">
                        <strong>&apos;Call of the Forest&apos; The Forgotten Wisdom of Trees</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Come out to watch this beautiful film on the significance of ancient forests!
                    </p>
                    
                    <div className="w-full mx-auto mb-8">
                        <Image
                            src="/images/blog/blog0019/blog19.png"
                            alt="Forest with text: Call of the Forest, A film by Jeff McKay, and other details"
                            width="353"
                            height="382"
                            className="w-full mx-auto self-center"
                        />
                    </div>

                    <p className="mb-8 mt-0 pt-0 text-justify">
                        
                        In this documentary, we follow visionary scientist, conservationist and author, Diana Beresford-Kroeger, on her journey to the most beautiful forests of the northern hemisphere. From the sacred sugi and cedar forests of Japan, the ancient Raheen Wood of Ireland, the walnut and redwood trees of America, to the great boreal forest of Canada, Beresford-Kroeger tells us the amazing stories behind the history and legacy of these ancient forests while also explaining the science of trees and the irreplaceable roles they play in protecting and feeding the planet.

                    </p>

                    <p className="mb-8 text-justify">
                        <span className="text-green-600">“Call of the Forest is magnificent! This is a very important film and I hope that all of the politicians in Ottawa receive a copy of it – and the forest ministries around the world.”</span> <br/>- <b>David Suzuki, Scientist, Author and Broadcaster</b>
                    </p>

                    <p className="mb-8 text-justify">
                        Prepare to be amazed, entertained but also informed about the wonder of ancient forests, around the world and here in Canada. We can not protect what we do not understand and ‘Call of the Forest’ responds to this need beautifully. As Diana Beresford-Kroeger says “Nature is the thread that completes the tapestry of life.” Our understanding of our essential connection to nature, that we can never be apart from it, is crucial to our ability to sustain and protect it. 
                    </p>

                    <p className="mb-8 text-justify">
                        We are thrilled to be able to host this amazing film and thank Treespeak Films and Merit Motion Pictures for the gracious gift of its screening. We would also like to extend our gratitude for the generous donation of the venue costs, sponsored in memory of Howard Ransom and Sloan Watters.

                    </p>



                    <p className="mb-8 text-justify">
                        Here are the details of the event:
                    </p>
                    
                    <table className="w-full mb-8 gap-x-8">
                        <tbody>
                            <tr>
                                <td>Where:</td>
                                <td className="pl-4">O’Brien Theater - 147 John Street North</td>
                             
                            </tr>
                            <tr>
                                <td>When</td>
                                <td className="pl-4">Sunday April 13th @ 4:00pm</td>
     
                            </tr>
                            <tr className="align-top">
                                <td>Tickets:</td>
                          
                                <td className="pl-4">
                                    Adults $10, Children $5, and Family $20, available at the door.<br/>
                                    All proceeds go towards the Save The Grove Again campaign.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="w-full mx-auto mb-8">
                    <iframe 
                    src="https://player.vimeo.com/video/185080510?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"  title="Call of the Forest - Official Trailer"
                    className="w-full h-full m-0 p-0 mx-auto" >
                    </iframe>
                </div>


                    <p className="mb-8 text-justify">
                        More information on the film is available <a href="https://calloftheforest.ca/" className="text-green-600">here</a>.
                    </p>

                    <p className="pt-8 pb-8 
                    text-center text-2xl weight-bold text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0019;
