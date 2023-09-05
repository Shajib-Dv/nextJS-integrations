/** @format */

import getProductByCategory from "@/utils/getProductByCategory";
import Link from "next/link";
export const metadata = () => {
  return {
    title: "NextRush | ServiceDetails",
  };
};
const ServiceDetails = async ({ searchParams }) => {
  const category = parseInt(searchParams?.category);
  const products = await getProductByCategory(category);

  return (
    <div>
      {products &&
        products.map((product) => (
          <Link href={`/services/product/${product.id}`} key={product.id}>
            <p>{product.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default ServiceDetails;
