import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "News and Events",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Page"
        description="News and Events"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container self-center">

            {blogData.map((blog) => (
                <div
                    key={blog.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                    <SingleBlog blog={blog} />
                </div>
            ))}

        </div>
      </section>
    </>
  );
};

export default Blog;
