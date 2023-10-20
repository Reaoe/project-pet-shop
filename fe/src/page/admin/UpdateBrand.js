import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

const UpdateBrand = (props) => {
  console.log(props.editProduct);
  const id = props.editProduct;
  const [dataCategory, setDataCategory] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/category/${id}`)
      .then((res) => {
        setDataCategory(res.data.data.getOneCategory);
        console.log(res.data.data.getOneCategory);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleID = (id) => {
    // console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        axios.delete(`http://localhost:8080/api/v1/category/${id}`);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    });
  };
  return (
    <div className="w-full flex flex-col gap-4 relative">
      <div className="h-[69px] w-full"></div>
      <div className="p-4 border-b w-full bg-gray-100 flex justify-between items-center fixed top-0">
        <h1 className="text-3xl font-bold tracking-tight">Update brand</h1>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="border bg-sky-900 text-white border-white py-2">
            <th className="text-center py-2">#</th>
            <th className="text-center py-2">Category</th>
            {/* <th className="text-center py-2">Brand</th> */}
            <th className="text-center py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataCategory.map((el, idx) => {
            console.log(el.category);
            return (
              <tr key={el._id} className="border-b">
                <td className="text-center py-2">{idx + 1}</td>
                <td className="text-center py-2">{el.nameCategory}</td>
                <td className="text-center py-2">
                  <span
                    onClick={() => setEditProduct(el._id)}
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

export default UpdateBrand;
