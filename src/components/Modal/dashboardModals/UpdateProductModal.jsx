/** @format */

import { forwardRef, useRef } from "react";

const UpdateProductModal = ({ product, close, handleSubmit }, ref) => {
  const formRef = useRef(null);

  return (
    <>
      <dialog ref={ref} className="modal">
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          method="dialog"
          className="modal-box border border-yellow-500 overflow-hidden"
        >
          <div className="form-control w-full">
            <label htmlFor="title" className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={product?.title}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="price" className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              id="price"
              defaultValue={product?.price}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-start mt-5">
            <button type="submit" className="btn btn-outline btn-success">
              Save
            </button>
          </div>
          <span
            onClick={() => {
              close();
              formRef.current.reset();
            }}
            className="text-3xl font-bold absolute top-0 right-0 btn btn-outline btn-error "
          >
            &times;
          </span>
        </form>
      </dialog>
    </>
  );
};

export default forwardRef(UpdateProductModal);
