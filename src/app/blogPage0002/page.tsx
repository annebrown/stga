import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STGA Launch Event",
  description: "",
  // other metadata
};

const BlogPage0002 = () => {
    return (
        <>
            <section className="pb-[60px] pt-[75px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight text-center">
                            STGA Launch Event
                            </h2>

                            <div className="mb-5 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4">
                                <div className="flex flex-wrap items-center">
                                    <p className="text-base font-medium text-black">
                                        September 11, 2024
                                    </p>
                                </div>
                                <div className="mb-0">
                                    <a
                                    href="#0"
                                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                                    >
                                        Update
                                    </a>
                                </div>
                            </div>


                            
                            <div className="text-center px-20">
                                <div className="mb-10 w-full overflow-hidden rounded">
                                    <div className="relative aspect-[100/75] w-full">
                                        <Image
                                            src="/images/blog/blog0002/group-pic.svg"
                                            alt="image"
                                            fill
                                            className="object-cover object-center h-fit"
                                        />
                                    </div>
                                </div>
                                <p className="text-left py-2">
                                    Arnprior citizens and Volunteers of the Save the Grove Again campaign convened at the Emmanuel Anglican Church, on the corner of Ottawa and Harrington street, this past Saturday September 7th, to share their love and support for the forest and meadow area adjacent to the Gillies Grove to counter yet another proposal to develop this sacred green space.
                                </p>
                                <p className="text-left py-2">
                                    Gathering to protect and save the global rarity that is the Gillies Grove Old-Growth Forest is unfortunately a familiar cause for the community of Arnprior, having gathered only a mere 34 years ago in 1990 to Save the Grove from being developed into a subdivision.
                                </p>
                                <p className="text-left py-2">
                                    The well-attended launch event on Saturday and all the online activity truly shows that the passion is still alive in Arnprior today. We would like to extend our thanks to all that were able to attend the gathering on Saturday and to all of those that have been helping to spread the word. Together we can find a better way! 
                                </p>
                                <p className="text-left py-2">
                                    We have had a lot of media attention. Let&apos;s keep the ball rolling! Keep telling others, wear your button, hand out flyers, and follow, like and share our Facebook page .
                                </p>
                                <h2 className="my-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                                    What&apos;s Next?
                                </h2>
                                <p className="text-left py-2">
                                    We are working on the contact list for those wishing to email, call or mail other parties involved. We will let everyone know by email when that becomes available through our website.
                                </p>
                                <h2 className="my-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                                    How to make a difference
                                </h2>
                                <p className="text-left py-2">
                                    Subscribe to our <a className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSfBFJHDmUnmpGv1XaSHGaSSPmGizbxrQ-KgeqRRZqdVNZeuHg/viewform">mailing list</a> to get the latest updates, announcements and events
                                </p>
                                <p className="text-left py-2">
                                    We have set up a volunteer form. If you would like to offer your help please take a few minutes to fill in the <a  className="text-[#38AF34]" href="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link">form</a>.
                                </p>
                                <p className="text-left py-2">
                                    Take a moment to sign the <a className="text-[#38AF34]"  href="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120">online petition</a> (please note that donations through change.org do not come directly to our cause, please send an e-transfer to&nbsp;
                                        <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34]">
                                    savethegroveagain@gmail.com</a>.
                                </p>
                                
                                <p className="text-left py-2">
                                    For those who are wanting to make a donation the best way to get money directly to us is via an e-transfer to this email address 
                                    <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34]">
                                    savethegroveagain@gmail.com</a>. Please share that information with others who may want to contribute.
                                </p>

                            

                            </div>





                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage0002;
