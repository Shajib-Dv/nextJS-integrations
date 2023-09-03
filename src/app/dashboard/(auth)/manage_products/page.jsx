/** @format */

import getProductByCategory from "@/utils/getProductByCategory";

const ManageProducts = async () => {
  const products = await getProductByCategory();

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table md:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th colSpan={2} className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, idx) => (
                <tr key={product.id}>
                  <th>{idx + 1}</th>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="btn btn-info">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-accent">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProducts;
