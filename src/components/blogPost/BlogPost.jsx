/** @format */

import Image from "next/image";
import img from "/public/images/rectangle4.png";
const BlogPost = ({ title }) => {
  return (
    <div className="md:flex items-center gap-10  rounded-md shadow-2xl p-6">
      <div className="md:w-60 h-auto rounded-md object-cover">
        <Image
          src={img}
          alt="img"
          className="md:h-40 w-full object-cover rounded-md"
        />
      </div>
      <div className="w-full space-y-6">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          id, aliquid neque ipsum aliquam ea enim quasi reiciendis repellat
          doloribus quae, blanditiis, necessitatibus consequuntur voluptatum
          deserunt dignissimos officia omnis beatae nulla repellendus similique.
          Nesciunt, perferendis consequuntur maxime natus fugiat eum culpa, unde
          facere, voluptatum quibusdam deserunt modi cumque. Delectus vel atque
          nisi aliquid culpa explicabo doloribus libero id veritatis modi.
          Beatae, maxime officia. Cupiditate hic architecto eos aperiam illum
          adipisci nihil soluta debitis error, aut consectetur omnis, voluptate
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
