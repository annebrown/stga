
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grove Rove - Conducting Natural Heritage Surveys",
  description: "with ecologist Mark Heaton",
};

const BlogPage0030 = () => {
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
                            June 11, 2026
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
                    <strong>Grove Rove - Conducting Natural Heritage Surveys</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    with ecologist Mark Heaton
                </p>
                


                <p className="mb-8 text-justify">
                  This month&apos;s Grove Rove is a special treat for Grove enthusiasts. Ecologist, Mark Heaton is in the process of conducting research of Gillies Grove and we&rsquo;ve aligned our Rove to coincide with one of his research weekends. Drawing on his expertise in natural heritage system planning and habitat conservation Mark will share what he looks for when studying an ecosystem and how certain findings can be used to support conservation efforts. He will also explain why it is important to zoom out and look at the bigger picture!
                </p>



                <div className="mb-8">
                    <Image
                        src="/images/blog/blog0030.png"
                        alt="Grove Rove Event Poster"
                        width="386"
                        height="500"
                        className="self-center mx-auto"
                    />
                </div>


                <p className="mb-8 text-justify">
                    The walk will focus on &ldquo;Conducting Natural Heritage Surveys&rdquo;.  
                </p>

                  <p className="mb-2 text-justify">
                    Topics covered will include: 
                </p>
                <ul className="list-disc list-inside mb-8 text-justify">
                    <li>survey ethics</li>
                    <li>Geographic Information System mapping resources</li>
                    <li>monitoring equipment</li>
                    <li>data analysis techniques</li>
                </ul>

                <p>
                    It is recommended that attendees load their cell phones with the following apps:
                </p>

                <p className="m-4 text-green-600">
                    <Link href="https://appkingo.com/p676/merlin-bird-id-by-cornell-lab/com.labs.merlinbirdid.app#google_vignette" target="_blank">
                        Merlin Bird ID by Cornell Lab - appkingo
                    </Link>
                </p>

                <p>AND</p>

                <p className="m-4 text-green-600">
                    <Link href="https://www.inaturalist.org/pages/seek_app" target="_blank">
                        Seek (iNaturalist)
                    </Link>
                </p>

                <p className="mb-0">
                    <b>About Mark:</b>
                </p>
                <p className="mb-8 text-justify">
                    Mark Heaton is a retired Fish and Wildlife Biologist with a Bachelor of Science from the
University of Western Ontario, who spent 34 years with the Ontario Ministry of Natural
Resources and Forestry (MNRF) before transitioning to roles as a Senior Biologist for Ontario
Streams and a consulting Ecologist for Symbiosys Ecology. Throughout his extensive MNRF
career, he evaluated thousands of development and resource planning proposals under major
provincial and federal legislation to avoid and mitigate environmental impacts on fish, wildlife,
and wetland habitats. Mark possesses deep expertise in natural heritage systems planning,
stream and wetland restoration, and specialized wildlife management. His decades of
leadership and dedication to habitat conservation and river rehabilitation have been recognized
with numerous prestigious honors, including the 2017 Latornell Leadership Award and the 1998
Roderick Haig Brown Award.
                </p>

                <ol className="mb-8">
                   <li><b>What:</b> Grove Roves - guided community forest walks</li>
                   <li><b>Date:</b> Saturday June 13 - Theme: Conducting Natural Heritage Surveys</li>
                   <li><b>Time:</b> 10:00am-12:00pm</li>
                     <li><b>Location:</b> Gillies Grove, Arnprior</li>
                     <li><b>Distance:</b> 2 kms or less. There will be opportunities to shorten your experience and head back to the parking lot, if a shorter trek is what you prefer.</li>
                     <li><b>Cost:</b>  If you would like to make a donation, we would be happy to put it towards the Save the Grove, Again initiatives for protecting this forest from current threats of development. </li>
                </ol>

                <p>No registration necessary.</p>
































                <div className="mb-8">
                    <Image
                        src="/images/logo/fotg.png"
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

export default BlogPage0030;
