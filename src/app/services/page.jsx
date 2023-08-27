/** @format */

import getCategories from "@/utils/getCategories";
import Link from "next/link";

const Services = async () => {
  const categories = await getCategories();

  return (
    <div>
      {categories &&
        categories.map((category) => (
          <div key={category.id} className="p-10">
            <Link href={`/services/product?category=${category.id}`}>
              {category.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Services;
