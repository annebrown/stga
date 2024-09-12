import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, alt, width, height, paragraph, author, tags, publishDate, blogURL } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two w-full h-full">
        <Link
          href={blogURL}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 bottom-6 z-20 inline-flex items-center justify-center rounded-full bg-primary/80 px-4 py-2 text-sm font-semibold capitalize text-black">
            {tags[0]}
          </span>
          <Image 
            src={image} 
            alt={alt}
            width={width}
            height={height}
            className="w-full"/>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={blogURL}
              className="mb-4 block text-xl font-bold text-black hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-black">
            {paragraph}
          </p>
          <div className="flex items-center">
            <p className="text-xs text-black">{publishDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
