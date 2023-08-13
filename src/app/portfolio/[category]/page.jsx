/** @format */

import Image from "next/image";
import img from "/public/images/rectangle4.png";
const portfolioProject = ({ params }) => {
  return (
    <>
      <p className="font-bold text-green-600">{params?.category || Untitled}</p>
      <div className="mt-20 flex items-center gap-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-semibold">
            Explore our creative sites.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
            culpa.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            dolorum reprehenderit eos fugit ullam quos recusandae eaque ex
            veniam excepturi vel aliquam temporibus autem sunt voluptatum
            corrupti quod cum, maxime, tenetur earum assumenda error praesentium
            nam qui! Distinctio commodi ducimus temporibus, eum voluptate neque
            illo incidunt quidem, iure pariatur unde!
          </p>
          <button className="btn btn-neutral bg-green-700">Explore</button>
        </div>
        <div className="flex-1">
          <Image src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default portfolioProject;
