
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paint and Sip Fundraiser",
  description: "Art Class with Murielle Egan at the Art Loft!",
  // other metadata
};

const BlogPage0028 = () => {
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
                            February 27, 2026
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
                    <strong>Paint and Sip Fundraiser</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    Art Class with Murielle Egan at the Art Loft!
                </p>
                
                <div className="mb-8">
                    <Image
                        src="/images/blog/blog0028.png"
                        alt="Event Poster"
                        width="375"
                        height="500"
                        className="self-center mx-auto"
                    />
                </div>

                <p className="mb-8 text-justify">
                    On <b>March 21st</b>, come out for an afternoon at the Art Loft and learn some new paint skills as we
embark on a journey together at this &apos;paint-and-sip&apos; class. <b>Murielle Egan</b> is an accomplished art
teacher that we are thrilled will be leading this event. Her supportive and kind approach helps
coax the best out of her students, regardless of whether they are a seasoned painter or just
starting out.
                </p>

                <p className="mb-8 text-justify">
                    The piece we will be painting is both beautiful and poignant. We focus on the quintessential
birch tree, and its iconic bark that we all know and love. Murielle will show us techniques to paint
these intricacies, the way the bark cracks and curls, how to give shadows their depth, and just
how to build shading to make the bark look so life-like.
                </p>

                <p className="mb-8 text-justify">
                    We will also have some forest-inspired teas to &apos;sip&apos; while we work, to help bring the ambiance of
the forest into the studio! Come meet friends, both old and new, and learn some great new skills
in the process. All art supplies will be provided, and you’&apos;ll be able to take home your painting to
enjoy for years to come! Size will be 9”x12” on canvas.
                </p>

                <p className="mb-4 text-justify">
                    Here are the details:
                </p>

                <table className="w-full mb-8 gap-x-8 align-top">
                    <tbody>
                        <tr>
                            <td className="font-bold align-top">
                                When:
                            </td>
                            <td className="pl-4">
                                <p>March 21st at 1:00pm-4:30pm </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold align-top">
                                Where:
                            </td>
                            <td className="pl-4">
                                Art Loft at 152 John Street North, Arnprior
                            </td>
                        </tr>

                        <tr>
                            <td className="font-bold align-top">
                                Tickets:
                            </td>
                            <td className="pl-4">
                                Limited tickets available at <Link href="https://Ticketsplease.ca" className="text-green-600">Ticketsplease.ca</Link>
                            </td>
                        </tr>
                                                <tr>
                            <td className="font-bold align-top">
                                Price:
                            </td>
                            <td className="pl-4">
                                <p>$55</p>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <p className="mb-8 text-justify italic">
                    We would like to thank Murielle Egan for the generous donation of her time and expertise.
We would also like to thank the Art Loft for the gracious use of their space for this event.
                </p>

                                <p className="mb-8 text-justify">
                    Presented by Friends of the Grove. All proceeds will go towards administrative costs associated
with the Save the Grove Again initiative.
                </p>

                <div className="mb-0">
                    <Image
                        src="/images/blog/blog0028-fotg-200.jpg"
                        alt="Friends of the Grove Logo"
                        width="200"
                        height="200"
                        className=""
                    />
                </div>


                <p className="pt-8  pb-8 text-center text-2xl weight-bold text-[#165D8F] ">
                    Together we can find a better way!
                </p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0028;
