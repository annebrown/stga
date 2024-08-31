import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { content, initials } = testimonial;

  return (
    <div className="w-full bg-green-600 rounded-lg">
      <p className=" border-b border-body-color border-opacity-10 text-base leading-relaxed p-5 ">
        “{content}
      </p>
      <div className="flex items-center">
        <div className="w-full p-5 pt-0">
          <p className="text-sm">{initials}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
