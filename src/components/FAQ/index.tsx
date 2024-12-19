// /src/components/FAQ/index.tsx
import Link from "next/link";
import Image from 'next/image';
const FAQ = () => {
  return (
    <>
      <section id="FAQ" className="realtive z-30 mt-0 p-0 w-full text-black">
          
            <h2 className="text-3xl pb-5 mb-5 font-bold text-center">
                Frequently Asked Questions
            </h2>
            <div className="flex-col columns-1 md:columns-2 col-gap-10">
  
                <div className="break-inside-avoid-column">
                    <p className="py-2 font-bold">
                        1. Where is this property that is being considered for  development?
                    </p>
                    
                    <p className="text-justify py-2">
                    It is approximately 20 acres of land spanning from the eastern edge of the Gillies Grove Nature Reserve, south to Harrington Street, north to the Ottawa River and east to John Street. The piece effectively wraps around the Galilee Center buildings and cemetery, and is best illustrated by this map.
                    </p>
                    <div className="my-5 mr-5 w-full">
                        <Image src="/images/answer/map.svg" alt="map" loading="eager" priority width={1301} height={1148} />
                    </div>
                </div>
                    
                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 mt-5 font-bold">
                        2. What is the current zoning of this piece of land? 
                    </p>
                    <p className="text-justify p-2">
                    The land is predominantly zoned as &apos;Future Development&apos; with a small strip along the river that is zoned as &apos;Environmentally Protected&apos;.  
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        3. What will the development be? 
                    </p>
                    <p className="text-justify p-2">
                    At this time we have heard no official plans about what is being considered for the development of this property. After Cavanagh announced that they would be waiving their due diligence period, they did confirm that a housing development is in their plans. The word we have received from Cavanagh is that they intend to build single family homes and townhomes. No affordable housing will be included in the development.
                    </p>
                </div>
            
                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        4. Why haven&apos;t I heard about this?
                    </p>
                    <p className="text-justify p-2">
                    There has been little made public about this, and most of the information shared from the Galilee Center has been after the fact. The Town themselves were never consulted regarding the future of this land. Unless you are on the Galilee Center’s mailing list or know someone who is, you probably have not heard about this.
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        5. What stage is the sale at now?
                    </p>
                    <p className="text-justify p-2">
                    Cavanagh has announced that they will be proceeding with the purchase of the property, but there are still a number of steps that must be taken before the land officially changes hands. One of the key first steps is the application to sever the land from the larger Galilee property. We heard from the Town on December 18th that this application was recently submitted. If this is approved, the next step will be to apply to rezone the property which must be approved by the Town and usually involves a public consultation process. 
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        6. But, isn&apos;t this just a sale between two private parties?
                    </p>
                    <p className="text-justify p-2">
                    This argument can be made for insignificant property changes, such as when property will not be altered in any substantial way. This becomes a weak argument when land is being changed dramatically. There are limits to what can be built where, especially when it comes to protecting environmentally and culturally significant lands. Town planning and community involvement must be able to help steer land alterations when those changes will affect the environment and the community in such a profound way. This is one of those times.
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        7. Why didn&apos;t the Hospital buy the land?
                    </p>
                    <p className="text-justify p-2">
                    What we understand is that the Hospital was in negotiations with the Galilee Centre’s Board of Directors for the purchase of the land for many months. We were told that a verbal agreement had been reached. When the agreement was drawn up in writing by the hospital and submitted to Galilee, all communications ceased. It could be suggested that Galilee Center was no longer content with the terms of the agreement, however that was never brought to the attention of the Hospital&apos;s administration.
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        8. Why didn&apos;t the Nature Conservancy of Canada buy the land?
                    </p>
                    <p className="text-justify p-2">
                    The Nature Conservancy of Canada has stated that they expressed an interest in buying the land, and that interest was expressed to the Galilee Center and to OMI Lacombe. The Galilee Centre Board of Directors never responded to this request and no discussions were had. Therefore, they do not know how much land the NCC was interested in purchasing, nor how much they were willing to pay for it.
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-1 mb-2 font-bold">
                        9. Why is STGA not supporting the Galilee Centre?
                    </p>
                    <p className="text-justify p-2">
                    STGA’s commitment is to protect Gillies Grove and the adjacent land. We were looking forward to working together with the Galilee Centre and OMI Lacombe to find alternative solutions to preserve this land for the future of the old-growth forest and for the enjoyment of the community. We are confident that if the Nature Conservancy of Canada is given the chance to purchase this land, in partnership with the community, that the alternative vision of expanding the Grove instead of diminishing it is the responsible solution. Unfortunately, STGA has not been afforded the opportunity to discuss such alternate possibilities with Galilee Centre or OMI Lacombe.
                    </p>
                </div>

                <div className="break-inside-avoid-column mt-5">
                    <p className="text-left p-2 font-bold">
                        10. How can I help?
                    </p>
                    <p className="text-justify p-2">
                    This is one of our most frequently asked questions! Right now we are looking for signatures on our petition, volunteers, and donations. We have devoted a whole page on our website just for this! You can find it <a className="text-[#38AF34]" href="/action">here</a>.  While you are there, sign up for our mailing list so you can stay informed. 
                    </p>
                </div>



        </div>
           
        <p className="pt-5">
            If you have any questions that we have not covered on this page, please feel free to send them to us at <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34]">
                savethegroveagain@gmail.com<br/>
            </a>
        </p>
        <p 
            className="text-center pb-10 text-2xl weight-bold pt-8 text-[#165D8F] "
        >
            Together we can find a better way!
        </p>

      </section>
    </>
  );
};

export default FAQ;
