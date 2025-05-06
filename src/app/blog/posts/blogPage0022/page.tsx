
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Songs for the Grove: A Benefit Concert",
  description: "Local artists take to the stage to protect Arnprior&apos;s iconic old-growth forest",
};

const BlogPage0022 = () => {
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
                            May 6, 2025
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
                        <strong>Songs for the Grove: A Benefit Concert</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Local artists take to the stage to protect Arnprior&apos;s iconic old-growth forest
                    </p>
                    
                    <div className="aspect-[500/280] mb-8">
                        <Image
                            src="/images/blog/blog22.png"
                            alt="Two musicians"
                            width="500"
                            height="280"
                            className="self-center"
                        />
                    </div>

                    <p className="mb-8 text-justify text-[#165D8F]">
                        On Saurday, May 24, 2025, musicians from across the Ottawa Valley will come together at Emmanuel Anglican Church in Arnprior for Songs for the Grove—a benefit concert raising awareness and funds to help protect Gillies Grove from encroaching development.
                    </p>

                    <p className="mb-8 text-justify">
                        The concert will feature a diverse lineup, including folk artist Jennifer Noxon, who will perform her song &quot;Tall Pines,&quot; which she wrote 20-some years ago after visiting the Grove for the first time. Noxon will be joined by co-host and world-renowned classical guitarist Philip Candelaria, as well as performers Brendan Gawn, Fred Dell&apos;Amico, Patrick Klein, Richard Fallows, and the folk duo Three Corner Orchard.
                    </p>

                    <p className="mb-8 text-justify">
                        Tickets are $25 and can be purchased at White Pine Books and Green Bean Natural Foods in Arnprior, or <a href="https://savethegroveagain.ticketsplease.ca/product/songs-for-the-grove/" className="text-green-600">online</a> through <a href="http://TicketsPlease.ca" className="text-green-600">TicketsPlease.ca</a>. All proceeds will go towards the Save the Grove Again campaign, dedicated to preserving the ecological integrity of Gillies Grove for future generations.

                    </p>

                    <p className="mb-8 text-justify">
                        This will be Save the Grove Again&apos;s biggest event yet and it is all thanks to a group of inspired and dedicated folks with a love of music and nature. We are so excited!
                    </p>

                    <p className="mb-8 text-justify">
                        <b>Get out your calendars and buy your tickets today!</b> You won&apos;t want to miss this amazing night of songs to celebrate the forest that we cherish so much, <b>Gillies Grove!</b> 🌳 🌲
                    </p>

                    <table className="w-full mb-8 gap-x-8 align-top">
                        <tbody>
                            <tr>
                                <td className="font-bold align-top">
                                    What:
                                </td>
                                <td className="pl-4">
                                    Songs for the Grove: A benefit concert
                                </td>
                            </tr>

                            <tr>
                                <td className="font-bold align-top">
                                    Date:
                                </td>
                                <td className="pl-4">
                                    Saturday, May 24th<br/> 
                                    Doors open at 7:00pm<br/>  
                                    Concert at 7:30pm<br/>   
                                </td>
                            </tr>

                            <tr>
                                <td className="font-bold align-top">
                                Where:
                                </td>
                                <td className="pl-4">
                                Emmanuel Anglican Church<br/>  
                                287 Harrington Street, Arnprior  
                                </td>
                            </tr>

                            <tr>
                                <td className="font-bold align-top">
                                Tickets
                                </td>
                                <td className="pl-4">
                                    $25 (general admission)<br/>   
              Available online at <a href="https://savethegroveagain.ticketsplease.ca/product/songs-for-the-grove/" className="text-green-600">TicketsPlease </a>
 	   or in person at: White Pine Books, (158 John Street N) and   
	  Green Bean Natural Foods (117 John St. N)
                                </td>
                            </tr>

                        </tbody>
                    </table>


                    <h2 className="mb-8 text-justify">
                        Featured musicians 🎶
                    </h2>
                    <p className="mb-8 text-justify">
                        <b>Jennifer Noxon</b> (<i>Hip Folk</i>)<br/>    
                        Jennifer is centered in Almonte, where she is an artist, musician as well as runs a community choir. We are blessed to have her take to the stage as she sings “Tall Pines”, a song she wrote after visiting the Grove and hearing about the original Save the Grove cause. We are excited that she will be sharing this song with us as well as many others, with bassist Brendan Gawn.<br/>  
                            <a href="https://www.jennifernoxon.com/music"  className="text-green-600">https://www.jennifernoxon.com/music</a>
                    </p>
                    <p className="mb-8 text-justify">
                        <b>Philip Candelaria</b> (<i>Classical Guitar</i>)<br/>    
                        Philip is an internationally renowned classical guitarist that we are so lucky to have living right here in Arnprior\! Philip spends much of his year touring but he has managed to work a performance in Arnprior for our event. The Grove has a special place in Philip&apos;s heart as well.<br/>  
                        <a href="https://www.youtube.com/channel/UCoC-WrSrxlbHFAJ7fJkU1FQ"  className="text-green-600">YouTube</a>   
                    </p>
                    <p className="mb-8 text-justify"> 
                        <b>Fred Dell&apos;Amico</b> (<i>Original Folk songs and stories</i>)<br/>    
                        Fred is a local performer known for his delightful approach to stories and song. We are grateful for his presence at this evening concert!  <br/>  
                        <a href="https://neptunesmusic.net/musicians-corner/fred-dellamico/"  className="text-green-600">https://neptunesmusic.net/musicians-corner/fred-dellamico/</a>
                    </p>
                    <p className="mb-8 text-justify"> 
                        <b>Richard Fallows</b> (<i>Jazz Guitar</i>)<br/> 
                        You may have heard the sweet sounds of Richard playing at Ottawa Valley Coffee this year. A local gem, Richard brings his beautiful energy and music to the stage for us to enjoy and we are thrilled!
                    </p>

                    <p className="mb-8 text-justify"> 
                        <b>Three Corner Orchard</b> (<i>Folk Duo</i>)<br/> 
                        Hailing from Almonte as well, this powerful duo will get you swaying in your seats with a smile on your face.<br/>  
                        <a href="https://soundcloud.com/threecornerorchard"  className="text-green-600"> https://soundcloud.com/threecornerorchard</a>
                       
                    </p>
                    
                    <p className="mb-8 text-justify">  
                        <b>Patrick Kline</b> (<i>Classical Cello</i>)<br/>   
                            Founder of the Busker&apos;s Café concerts at the Arnprior Public Library, Patrick is also an Ottawa orchestral player and a member of the 10 Strings Duo. It is a privilege to have Patrick perform and share his talents with us.
                    </p>

                    <p className="mb-8 text-justify text-[#165D8F]">
                        What&apos;s it all about?
                    </p>

                    <p className="mb-8 text-justify">
                        This is a benefit concert for Save the Grove Again to help fund the initiative to protect Gillies Grove. In the months ahead, we will be needing the expertise of professionals to provide our team with legal, planning and environmental support.
                    </p>
                    <p className="mb-8 text-justify">
                        There will be an intermission where we will have a chance to mingle and chat while enjoying coffee, tea and some snacks by donation. Please bring cash as we cannot accept cards at the venue.  ☕ 🍰 🥤
                    </p>
                    <p className="mb-8 text-justify">
                        We hope to see you there!
                    </p>
                    <br/>
                    <p className="mb-8 italic text-center">
                        This event is kindly sponsored by <br/><br/><b>Charlotte Leitch, Broker Re-Max Absolute Realty</b>
                    </p>

                    <p className="pt-8  pb-8 
                    text-center text-2xl weight-bold text-[#165D8F] ">
                        Together we can find a better way!</p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0022;
