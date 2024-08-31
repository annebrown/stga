import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    initials: "- M.K.",
    content:
      "Residents of the Town of Arnprior and visitors alike have always...",
  },
  {
    id: 2,
    initials: "- M.H.",
    content:
      "Just as it is a wildlife corridor for...",
  },
  {
    id: 3,
    initials: "- P.M.",
    content:
      "Another impact that will be felt...",
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
