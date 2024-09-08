import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page 0002",
  description: "Placeholder for what's to come.",
  // other metadata
};

const BlogPage0002 = () => {
    return (
        <>
            <section className="pb-[60px] pt-[75px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <h2 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                                Second Title for Page 0002
                            </h2>
                            <p>Page Two</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage0002;
