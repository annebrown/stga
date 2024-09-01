import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    initials: "- P.D",
    content:
      "The Galilee Centre Land is a treasure in our community - one that we cannot lose. It is a habitat for insects, birds and wildlife and a healing space for many. It is important that we protect our green space when planning for development in our town.",
  },
  {
    id: 2,
    initials: "- P.M",
    content:
      "Another impact that will be felt will be huge traffic implications around the area that is home to three schools and the hospital.  It will become a very dangerous area to navigate, especially for children.",
  },
  {
    id: 3,
    initials: "- K.P",
    content:
      "I use the Galilee Centre grounds for lessons including: hiking, snowshoeing, xc skiing, fitness runs, cycling, scavenger hunts, tree identification, milkweed studies, soil studies, orienteering, etc. I rely heavily on this land to deliver my lessons.",
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-green-200 relative z-10 py-16 md:py-20 lg:py-28 rounded-lg ml-1.5 mr-2">
      <div className="container">
        <SectionTitle
          title="Local Voices"
          paragraph="What local are saying about the proposed development:"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
