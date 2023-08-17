/** @format */

import { redirect } from "next/navigation";

const loadSingleBlog = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return redirect("/blog");
  }

  return res.json();
};

export default loadSingleBlog;
