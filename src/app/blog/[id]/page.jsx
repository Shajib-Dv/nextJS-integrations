/** @format */

import Image from "next/image";
import img from "/public/images/lawyer-3.jpg";
import avatar from "/public/images/haturi.png";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const blogPost = async ({ params }) => {
  const data = await getData(params?.id);

  return (
    <div className="md:p-20 p-4">
      <div className="flex md:flex-row flex-col-reverse items-center gap-10 mb-10">
        <div className="flex-1 p-4">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">{data?.title}</h2>
            <p>{data?.body}</p>
          </div>
          <div className="flex items-center gap-10 mt-10">
            <Image
              src={avatar}
              alt="avatar"
              className="rounded-full h-12 w-12"
            />
            <p className="text-green-800">Shajib</p>
          </div>
        </div>
        <div className="flex-1">
          <Image src={img} alt="img" className="rounded-lg object-cover" />
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        voluptates commodi earum harum quaerat dolor expedita dolore iste
        eveniet facilis amet veritatis laudantium voluptas fugit, rem, autem
        distinctio. Nulla sint sequi omnis adipisci voluptas! Recusandae rem at
        nihil harum necessitatibus veniam adipisci, repellendus rerum similique
        eligendi quidem inventore optio delectus consequatur exercitationem aut
        commodi iusto modi ad culpa? Ut, voluptate.
      </p>
    </div>
  );
};

export default blogPost;
