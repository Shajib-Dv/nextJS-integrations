/** @format */

import BlogPost from "@/components/blogPost/BlogPost";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const blog = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 gap-10 md:p-20">
      {data &&
        data.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <BlogPost title={item?.title} />
          </Link>
        ))}
    </div>
  );
};

export default blog;
