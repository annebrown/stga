
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from 'next/link';
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join our Call to Council",
  description: "Announcing our NEW Postcard campaign!",
  // other metadata
};

const BlogPage0013 = () => {
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
                        January 18, 2025
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            ACTION
                        </a>
                    </div>
                </div>

                    <p className="text-2xl">
                        <strong>Join the Call for Council to Take Action</strong>
                    </p><br></br>
                    <p 
                        className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                    >
                       Announcing our NEW Postcard Campaign!

                    </p>

                    <div className="pb-8 w-full h-auto mx-auto">
                        <Image
                            src="/images/blog/blog0013/blog13.png"
                            alt="Greetings from Gillies Grove, 10,000 years in the making"
                            width="500"
                            height="386"
                            className="self-center"
                        />
                    </div>
               
                    <p className="pb-1"><strong>When:</strong> NOW</p>

                    <p className="mb-0 pb-0">
                        <strong>Pickup Locations:</strong>
                    </p>

                    <ul className="ml-2 mb-5">
                        <li><a href="http://cafetilda.ca/" className="text-[#38AF34] hover:text-primary">Cafe Tilda</a>, 158 John St. N.</li>
                        <li><a href="https://www.instagram.com/johnies.vintage/" className="text-[#38AF34] hover:text-primary">Johnie&apos;s Vintage</a>, 54 Madawaska St.</li>
                        <li><a href="http://www.mallardsmilkbar.com/" className="text-[#38AF34] hover:text-primary">Mallard&apos;s Milk Bar</a>, 55 John St. N.</li>
                        <li><a href="http://www.ottawavalleycoffee.ca/" className="text-[#38AF34] hover:text-primary">Ottawa Valley Coffee</a>, 32 Elgin St. W.</li>
                        <li>Sweet & Sassy Cafe and Bistro, 114 John St. N.</li>
                        <li><a href="https://www.whitepinebooks.ca/" className="text-[#38AF34] hover:text-primary">White Pine Books</a>, 152 John St. N.</li>
                        <li><a href="https://ovap.ca/" className="text-[#38AF34] hover:text-primary">Ottawa Valley Air Paddle</a>, 67 Madawaska St. N.</li>
                        <li>(more to come)</li>
                    </ul>

                    <p className="mb-8 text-justify">
                        Let our town know how you feel about the Grove and surrounding lands. While the old trees may still be standing, the crucial ecotone and supporting habitats that surround it are slated for development, ultimately putting the endangered old-growth woodland at risk. 
                    </p>

                    <p className="mb-0 font-bold">
                    Did you know?
                    </p>
                    <p className="mb-0 text-blue-800 text-justify">
                        “Ninety-eight percent of North America&apos;s old-growth forests have been eradicated.”
                    </p>
                    <p className="mb-8 text-sm">
                        - from Ontario&apos;s Old-Growth Forests by <em>Michael Henry</em> and <em>Peter Quinby</em>
                    </p>

                    <p className="mb-8 text-justify">
                        Both the Provincial Policy Statement and the Town of Arnprior Official Plan emphasize the need to protect significant woodlands AND their adjacent lands. Why then is development being considered for this environmentally sensitive area? 
                        Let our elected officials know how you feel about this.
                    </p>
                    <p className="mb-8 text-green-700 text-justify">
                        ***Request that members of council initiate a thorough ecological assessment of Gillies Grove Nature Reserve and the adjacent lands.*** 
                    </p>

                    <p className="mb-8 text-justify">
                        Pick up a postcard from one of the above listed local businesses. We have three design options to choose from:
                    </p>

                    <ul className="mb-8">
                        <li>🍄 Grab a blank one and write your own message</li>
                        <li>🍄 Take one with a pre-written message and add your name and postal code</li>
                        <li>🍄 Kids can draw themselves in the Grove in our special child friendly version</li>
                    </ul>


                        <Image
                            src="/images/blog/blog0013/01.webp"
                            alt="Greetings from Gillies Grove, 10,000 years in the making"
                            width="386"
                            height="500"
                            className="inline-block self-center w-full mb-0 pb-8 !mx-auto"
                        />


                    <div className="w-full mt-0 mb-8 pt-0 mx-auto">
                        <Image
                            src="/images/blog/blog0013/03.webp"
                            alt="Kids Page"
                            width="500"
                            height="386"
                            className="inline-block self-center w-full pb-8 mx-auto"
                        />
                    </div>

                    <p className="mb-8 text-justify">
                        Then either drop it in the mailbox (you&apos;ll need postage), drop it in the town&apos;s mail slot (105 Elgin St. W.), or perhaps request a meeting with one of our councillors and deliver it in person. Hey, snap a selfie of you posting your card in the mail slot and share it with our socials - let&apos;s get the word out…
                    </p>

                    <p className="mb-8 text-justify">
                        In addition to joining our postcard campaign, please consider supporting this cause in the following ways:
                    </p>
                    
                    <ul className="mb-8">
                        <li>💚 Invite family and friends</li>
                        <li>💚 Wear a button - Get yours at Green Bean Natural Foods (117 John St. N.) or Sweet and Sassy (114 John St. N.)</li>
                        <li>💚 Talk to your friends and family about the importance of old-growth forests </li>
                        <li>💚 Subscribe to our <a className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</a>.</li>
                        <li>💚 Fill out our <a  className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link"> volunteer form</a></li>
                        <li>💚 Like and follow our <a className="text-[#38AF34]" href="https://www.facebook.com/people/Save-the-Grove-Again/61565284064994/">Facebook page</a></li>
                        <li>💚 Subscribe to our <a className="text-[#38AF34]" href="https://www.youtube.com/@SaveTheGroveAgain">YouTube channel</a></li>
                        <li>💚 Make a donation via e-transfer to  <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34] hover:text-primary">savethegroveagain@gmail.com</a></li>
                    </ul>

                    <p className="text-center pb-8 text-2xl weight-bold pt-8 text-[#165D8F] ">Together we can find a better way!</p>

            </div>
        </div>

        
      </section>

    </>
  );
};

export default BlogPage0013;
