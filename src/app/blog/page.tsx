import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | STGA",
  description: "This is Blog Page for STGA",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="STGA News"
        description="Coming Soon!"
      />
    </>
  );
};

export default Blog;
