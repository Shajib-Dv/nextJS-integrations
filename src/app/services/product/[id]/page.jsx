/** @format */

import getSingleProductDetailsById from "@/utils/getSingleProductDetailsById";

const SingleProductDetails = async ({ params }) => {
  const { title, price, features } = await getSingleProductDetailsById(
    params?.id
  );
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:w-1/2 p-10 bg-base-200 shadow-2xl rounded-md space-y-5">
        <p className="capitalize text-green-700 font-bold">{title}</p>
        <p className="text-yellow-200">${price}</p>
        {features && features.map((itm, idx) => <p key={idx}>{itm}</p>)}
      </div>
    </div>
  );
};

export default SingleProductDetails;
