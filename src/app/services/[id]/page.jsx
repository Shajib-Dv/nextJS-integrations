/** @format */

import getProductByCategory from "@/utils/getProductByCategory";

const ServiceDetails = async ({ params }) => {
  const products = await getProductByCategory(params.id);

  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))}
    </div>
  );
};

export default ServiceDetails;
