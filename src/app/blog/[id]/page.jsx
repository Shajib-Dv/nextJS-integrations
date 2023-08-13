/** @format */

import Image from "next/image";
import img from "/public/images/lawyer-3.jpg";

const blogPost = ({ params }) => {
  return (
    <div className="md:p-20 p-4">
      <div className="flex md:flex-row flex-col-reverse items-center gap-10">
        <div className="flex-1 p-4 space-y-8">
          <h2 className="text-4xl font-bold">Hot news from {params?.id}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo
            cumque earum libero cum laudantium numquam repellendus deserunt vero
            magni.
          </p>
        </div>
        <div className="flex-1">
          <Image src={img} alt="img" className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default blogPost;
