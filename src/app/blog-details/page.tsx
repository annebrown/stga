import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                Save the Grove Again Information Session- Planting the Seed
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                  <div className="flex flex-wrap items-center">
                   
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-black">
                        <span className="mr-3">
                       

                        </span>
                        September 05, 2024
                      </p>
             
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Event
                    </a>
                  </div>
                </div>
                <div>
                  <p><strong>Event Title:</strong> Save the Grove Again Information Session- Planting the Seed</p>
                  <p><strong>Event Date:</strong> September 7 2024 at 1:00pm</p>
                  <p><strong>Event Location:</strong>Emmanuel Anglican Church</p>
                  <p>(corner of Harrington and Ottawa Street) Arnprior ON</p><br></br>
                  <p><strong>Event Desription:</strong></p><br></br>
                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Join us for an information session for the Save the Grove Again campaign, our first event in support of sharing the proposed repurposing of the land once known as Deer Park (known today as Galilee Center grounds). This event is curated by a group of dedicated local volunteers that want to share the love for this ecological and historical piece of land with guest speakers and offerings for community participation in the form of lawn signs, buttons and pamphlets. Come out on September 7th to show your support and help sow the seeds for a more sustainable solution.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/BLOG_1b.jpeg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Whether you can join us in person or not on September 7th, please consider supporting this cause in the following ways:
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <ul>
                        <li>- 🗞️Subscribe to our <a className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</a></li>
                        <li>- 💰Make a <a className="text-[#38AF34]"  href="https://savethegroveagain.com/donations">donation</a></li>
                        <li>- 🖋️Sign our <a className="text-[#38AF34]"  href="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120">online petition</a></li>
                        <li>- 🏡Place a lawn sign in your yard (email us and we can drop one off!)</li>
                        <li>- 👍Wear a button to show your support. Email us at:</li> 
                        <li className="text-center p-5">savethegroveagain@gmail.com</li> 
                    </ul>
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Contact Information:</p>
                  <p>
                  For more information, to ask a question or request a lawn sign, please contact one of our dedicated volunteers at: savethegroveagain@gmail.com. 
                  </p>

                    <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                        <p className="text-center text-base font-medium italic text-black">
                        🌱Small Steps, 🌳Big Impact!
                        </p>
                    </div>
                    <p>Together we can find a better way, </p>
                    <p>The volunteers of the Save the Grove Again Campaign ♥️</p><br></br>

                  
                  
                 <div className="container mx-auto w-full">
                  <div className="items-center justify-between sm:flex">
     
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-black sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
