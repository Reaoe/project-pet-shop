import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import UpdateProduct from './UpdateProduct';

const ManageProduct = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/product')
      .then((res) => {
        setDataProduct(res.data.data.getAllProduct);
        console.log(res.data.data.getAllProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleID = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/api/v1/product/${id}`)
      .then((res) => {
        window.location.reload(false);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  //
  const render = useCallback(() => {
    setUpdateProduct(!updateProduct);
  });
  return (
    <div className="w-full flex flex-col gap-4 relative">
      {editProduct && (
        <div className="absolute inset-0 min-h-screen bg-gray-100 z-50">
          <UpdateProduct editProduct={editProduct} render={render} />
        </div>
      )}
      <div className="h-[69px] w-full"></div>
      <div className="p-4 border-b w-full bg-gray-100 flex justify-between items-center fixed top-0">
        <h1 className="text-3xl font-bold tracking-tight">Manage Product</h1>
      </div>
      <table className="table-auto">
        <thead>
          <tr className="border bg-sky-900 text-white border-white py-2">
            <th className="text-center py-2">order</th>
            <th className="text-center py-2">thumb</th>
            <th className="text-center py-2">title</th>
            <th className="text-center py-2">category</th>
            <th className="text-center py-2">price</th>
            <th className="text-center py-2">quantity</th>
            <th className="text-center py-2">decription</th>
            <th className="text-center py-2">Acitons</th>
          </tr>
        </thead>
        <tbody>
          {dataProduct.map((el, idx) => {
            console.log(el.category);
            return (
              <tr key={el._id} className="border-b">
                <td className="text-center py-2">{idx + 1}</td>
                <td className="text-center py-2">
                  <img
                    src={el.image}
                    alt=""
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="text-center py-2">{el.productName}</td>

                <td className="text-center py-2">
                  {el.category !== null ? el.category.nameCategory : ''}
                </td>
                <td className="text-center py-2">{el.price}</td>
                <td className="text-center py-2">{el.stockQuantity}</td>
                <td className="text-center py-2">{el.description}</td>
                <td>
                  <span
                    onClick={() => setEditProduct(el)}
                    className="text-blue-500 hover:underline cursor-pointer px-1"
                  >
                    Edit
                  </span>
                  <span
                    className="text-blue-500 hover:underline cursor-pointer px-1"
                    onClick={() => handleID(el._id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
