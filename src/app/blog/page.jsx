/** @format */

import Image from "next/image";
import img1 from "/public/images/haturi.png";
import BlogPost from "@/components/blogPost/BlogPost";
import Link from "next/link";
const blog = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:p-20">
      <Link href="/blog/blog1">
        <BlogPost />
      </Link>
      <Link href="/blog/blog2">
        <BlogPost />
      </Link>
      <Link href="/blog/blog3">
        <BlogPost />
      </Link>
    </div>
  );
};

export default blog;
