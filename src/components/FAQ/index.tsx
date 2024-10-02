// /src/components/FAQ/index.tsx
import Link from "next/link";

const FAQ = () => {
  return (
    <>
      <section id="FAQ" className="realtive z-30 mt-0 p-0 w-full text-black">
          
            <h2 className="text-3xl pb-3 font-bold text-center">
                Frequently Asked Questions
            </h2>
            <div 
                className="
                    grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-5">

                <div className="text-center">
                    <p className="text-left py-2 font-bold">
                    1. Where is this property that is being considered for development?
                    </p>
                    <p className="text-justify py-2">
                    It is approximately 20 acres of land spanning from the eastern edge of the Gillies Grove Nature Reserve, south to Harrington Street, north to the Ottawa River and east to John Street. The piece effectively wraps around the Galilee Center buildings and cemetery, and is best illustrated by this map.

                    (insert map here)

                    </p>
                </div>
                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    2. What is the current zoning of this piece of land? 
                    </p>
                    <p className="text-justify p-2">
                    The land is predominantly zoned as 'Future Development' with a small strip along the river that is zoned as 'Environmentally Protected'. 
                    </p>
                </div>
            
                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    3. What will the development be? 
                    </p>
                    <p className="text-justify p-2">
                    At this time we have heard no official plans about what is being considered for the development of this property. As the Agreement of Purchase and Sale is with 'Cavanagh Communities', a housing complex is assumed but this has never been confirmed nor denied.
                    </p>
                </div>
            
                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    4. Why haven't I heard about this?
                    </p>
                    <p className="text-justify p-2">
                    There has been little made public about this, and most of the information shared from the Galilee Center has been after the fact. The Town themselves were never consulted regarding the future of this land. Unless you are on the Galilee Center mailing list or know someone who is, you probably have not heard about this.
                    </p>
                </div>


                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    5. What stage is the sale at now?
                    </p>
                    <p className="text-justify p-2">
                    At this time, Galilee Canter and Cavanagh Communities have an Agreement of Purchase and Sale with a due diligence period that was to expire on September 16th at 5:00pm. Due diligence is typically when a prospective buyer will ensure that the property meets their requirements. No request to sever the land nor rezone it has been made as of yet. The title of this land is still under Galilee Mission Center of Arnprior Corporation. We are not aware what the closing date for the sale is, this information has not been made public. Recently we learned that the due diligence period was extended by Cavanagh for an additional 30 days.
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    6. Isn’t this already a done deal?
                    </p>
                    <p className="text-justify p-2">
                    6
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    7. But, isn't this just a sale between two private parties?
                    </p>
                    <p className="text-justify p-2">
                    This argument can made for insignificant property changes, such as when property will not be altered in any excessive way. This becomes a weak argument when land is being changed dramatically. There are limits to what can be built where and we should all be thankful for that as no one would like a dump site or rifle range next door. Town planning and community involvement must be able to help steer land alterations when those changes will affect them in such a profound way. This is one of those times.
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    8. Why didn't the Hospital buy the land?
                    </p>
                    <p className="text-justify p-2">
                    What we understand is that the Hospital was in negotiations with the Galilee Centre’s Board of Directors for the purchase of the land for many months. We were told that a verbal agreement had been reached. When the agreement was drawn up in writing by the hospital and submitted to Galilee, all communications ceased. It could be suggested that Galilee Center was no longer content with the terms of the agreement, however that was never brought to the attention of the Hospital's administration.
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    9. Why didn't the Nature Conservancy of Canada buy the land?
                    </p>
                    <p className="text-justify p-2">
                    The Nature Conservancy of Canada has stated that they expressed an interest in buying the land, and that interest was expressed to the Galilee Center. The Galilee Centre Board of Directors never entertained this offer with any discussions. Therefore, they do not know how much land the NCC was interested in purchasing, nor how much they were willing to pay for it.
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    10. Where does the town stand on this?
                    </p>
                    <p className="text-justify p-2">
                    10
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    11. Why is STGA not supporting the Galilee Centre?
                    </p>
                    <p className="text-justify p-2">
                    11
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-left p-2 font-bold">
                    12. How can I help?
                    </p>
                    <p className="text-left p-2">
                        This is one of our most frequently asked questions! Right now we are looking for signatures on our petition, volunteers, and donations. You can also sign up on our mailing list to stay informed. We have devoted a whole page on our website just for this! You can find it <a className="text-[#38AF34]" href="/action">here</a>.
                    </p>
                </div>

               
            </div>
            <p className="pt-5">
                    If you have any questions that we have not covered on this page, please feel free to send them to us at <a href="mailto:savethegroveagain@gmail.com" className="text-[#38AF34]">
                        savethegroveagain.com<br/>
                    </a>
                </p>
          <p className="text-center pb-10 text-2xl weight-bold pt-4 text-[#165D8F] ">Together we can find a better way!</p>

      </section>
    </>
  );
};

export default FAQ;
