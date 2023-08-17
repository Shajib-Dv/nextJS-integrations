/** @format */

import BlogPost from "@/components/blogPost/BlogPost";
import loadBlogs from "@/utils/loadBlogs";
import Link from "next/link";

export const metadata = () => {
  return {
    title: "NextRush | blogs",
  };
};

const blog = async () => {
  const blogs = await loadBlogs();
  return (
    <div className="grid grid-cols-1 gap-10 md:p-20">
      {blogs &&
        blogs.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <BlogPost title={item?.title} />
          </Link>
        ))}
    </div>
  );
};

export default blog;
