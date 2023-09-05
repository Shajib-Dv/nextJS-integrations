/** @format */

const ManageProductTable = ({ product, idx, openModal, handleDelete }) => {
  return (
    <>
      <tr key={product.id}>
        <th>{idx + 1}</th>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
          <button onClick={() => openModal(product)} className="btn btn-info">
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
    </>
  );
};

export default ManageProductTable;
