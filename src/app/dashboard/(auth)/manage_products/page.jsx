/** @format */
"use client";
import UpdateProductModal from "@/components/Modal/dashboardModals/UpdateProductModal";
import getProductByCategory from "@/utils/getProductByCategory";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";

const ManageProducts = async () => {
  const modalRef = useRef(null);
  const [product, setProduct] = useState({});
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const products = await getProductByCategory();

  const openModal = (product) => {
    setProduct(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setProduct({});
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;

    const updatedDoc = { title, price: parseFloat(price).toFixed(2) };

    if (title && price) {
      try {
        const res = await fetch(
          `http://localhost:5000/products/${product?.id}`,
          {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedDoc),
          }
        );
        const result = await res.json();
        if (result) {
          form.reset();
          closeModal();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    startTransition(() => {
      router.refresh();
    });
  };

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
                    <button
                      onClick={() => openModal(product)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-accent"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <UpdateProductModal
        ref={modalRef}
        handleSubmit={handleSubmit}
        close={closeModal}
        product={product}
      />
    </>
  );
};

export default ManageProducts;
