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
                        12 Jan 2024
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
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className="text-primary">
                      malesuada
                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-black">
                    <li className="mb-2 text-base font-medium text-black sm:text-lg lg:text-base xl:text-lg">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="mb-2 text-base font-medium text-black sm:text-lg lg:text-base xl:text-lg">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="mb-2 text-base font-medium text-black sm:text-lg lg:text-base xl:text-lg">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="mb-2 text-base font-medium text-black sm:text-lg lg:text-base xl:text-lg">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-black">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
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
      </section>
    </>
  );
};

export default BlogDetailsPage;
