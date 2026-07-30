
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grove Rove Review: July 2026",
  description: "Featuring bat expert Brian Hickey",
  // other metadata
};

const BlogPage0031 = () => {
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
                            July 30, 2026
                        </p>
                    </div>
                    <div className="mb-0">
                        <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black"
                        >
                            REVIEW
                        </a>
                    </div>
                </div>

          
                <p className="text-2xl">
                    <strong>Grove Rove Review: July 2026</strong>
                </p><br></br>
                <p 
                    className="mb-10 text-base font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed text-justify"
                >
                    Featuring bat expert Brian Hickey
                </p>
                
                <div className="mb-8">
                    <Image
                        src="/images/blog/blog31.png"
                        alt="XXXXXXXX ALT XXXXXXXX"
                        width="500"
                        height="96"
                        className="self-center mx-auto"
                    />
                </div>

                <p className="mb-8 text-justify">
This past weekend we had the pleasure of welcoming back Brian Hickey to lead our Grove Rove for July 2026. As a senior research scientist and educator with the River Institute in Cornwall, Brian is a wealth of knowledge and a passionate teacher. We enjoyed learning about, hearing, and seeing several bat species together! 
                </p>

                <p className="mb-8 text-justify">
                    Our guided walk started at the entrance of Gillies Grove old-growth forest, where Brian shared lots of interesting facts about bats while we waited for the sun to set. Dusk is the best time to observe bats, and our forest offers three elements to support a healthy bat population: proximity to the Ottawa River / Kitchi Sibi, the presence of snags in the old growth forest, and the accompanying meadow on the eastern edge of the forest. 
                </p>

                <p className="mb-8 text-justify">


Fresh water is a great hunting ground for bats because many insect species can spend years as larvae in the water, and when they mature and emerge, bats take advantage. 
</p>

                <p className="mb-8 text-justify">

It&apos;s getting more and more rare that bats live in snags - remains of trees allowed to decay over time rather than being felled - because there has been such a reduction in available snags that they have learned to roost instead in human-made structures like barns, attics, and bridges. Luckily, the Grove has many snags available to support many forest dwellers. We hope the word gets out so more bat buddies come to stay. 
</p>

                <p className="mb-8 text-justify">

Having the meadow next to the forest increases the biodiversity of both ecosystems, providing lots of tasty options for bats to enjoy.

</p>

                <p className="mb-8 text-justify">
Brian explained that bats are an indicator species because they are part of a short food chain; insects are consumed by bats, and bats are examined for insights into the health of the ecosystem. During his work at The River Institute near Cornwall, Brian recorded that the level of mercury in bats is so high, it exceeds levels we consider dangerous for consuming fish by multitudes. 
</p>

                <p className="mb-8 text-justify">

We also learned about white-nose syndrome, a fungus which is highly contagious between bats living in caverns, which can kill up to 99% of bats at a site. Brian studied many such sites which were devastated by this disease. While he has observed some recovery, the populations at those locations are a fraction of what they used to be. 
</p>

                <p className="mb-8 text-justify">

Once the sun started to set, we made our way through the forest towards the river and the meadow. We listened for distinctive chirps on bat detectors set to a specific frequency that bats use for their echo-location. We heard and saw little brown bats, big brown bats, and hoary bats as they zipped and dashed across the sky. We were also visited by something else in the sky: a low-flying helicopter on its way to the neighbouring hospital. Luckily, this did not prevent us from noticing the critters we had set out to find.  

</p>

                <p className="mb-8 text-justify">
If you&apos;re interested in putting up bat houses, have patience. Bats like to return to roost where they were born, so it can take many years for one to move into a new home. If you do find you have new tenants in your bat house, they were likely recently evicted from a neighbouring attic. 

</p>

                <p className="mb-8 text-justify">
Thank you to everyone who attended our event - our highest attended Grove Rove yet! And of course a special and heartfelt thank-you to Brian Hickey, for generously offering his time, wisdom, and love for nature. We feel so lucky to have his support, and the support of the wider community as we strive to share and protect our precious Gillies Grove old-growth forest. 

</p>

                <p className="mb-8 text-justify">
We hope to see you at the next Grove Rove happening on Saturday August 22 at our regular time of 10:00 am. 


                </p>

            


                <p className="pt-8  pb-8 text-center text-2xl weight-bold text-[#165D8F] ">
                    Together we can find a better way!
                </p>

            </div>
        </div>

      </section>

    </>
  );
};

export default BlogPage0031;
