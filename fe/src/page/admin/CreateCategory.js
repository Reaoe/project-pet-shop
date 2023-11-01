import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import axios from 'axios';

const CreateCategory = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCategoryChild, setDataCategoryChild] = useState([]);
  const [errors, setErrors] = useState({});
  const [categoryID, setDataCategoryID] = useState();
  const [input, setInput] = useState({
    nameCategory: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/category/parent-category')
      .then((response) => {
        setDataCategory(response.data.data.getParentCategory);
        console.log(response.data.data.getParentCategory);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const optionID = (event) => {
    const selectID = dataCategory.find(
      (item) => item.nameCategory === event.target.value
    );
    console.log(selectID);

    setDataCategoryID(selectID);
  };
  const handleOptions = () => {
    return dataCategory?.map((item) => {
      return <option key={item.id}>{item.nameCategory}</option>;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    
    if (dataCategory === '') {
      // errorSubmit.category = 'vui lòng nhập category';
      toast.error('vui lòng chọn category');
      flag = false;
    }
    if (input.nameCategory === '') {
      // errorSubmit.nameProduct = 'vui lòng nhập nameproduct';
      toast.error('vui lòng nhập brand');
      flag = false;
    }
    if (!flag) {
      setErrors({ errorSubmit });
    } else {
      const data = {
        nameCategory: input.nameCategory,
        parent: categoryID,
      };
      await axios
        .post('http://localhost:8080/api/v1/category', data)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire('Successful!', '', 'success');
          }
          if (res.data.errors) {
            setErrors(res.data.error);
          } else {
            console.log(res.data);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 400) {
              toast.error('vui lòng chọn category và brand');
            }
          }
        });
    }
  };
  return (
    <div className="w-full">
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold p-4 border-b">
        <span>Create New Category</span>
        <MdAddShoppingCart />
      </h1>
      <div className="p-4">
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 flex-auto">
            <label>Category</label>
            <select
              id="category"
              className="flex-auto bg-[#fff] border-[#6b7280] border-[1px] px-2 py-3 text-base w-full"
              onChange={optionID}
            >
              <option>-----CHOOSE------</option>
              {handleOptions()}
            </select>
          </div>
          <div className="flex flex-col h-[78px] gap-2 w-full">
            <label>brand</label>
            <input
              type="text"
              name="nameCategory"
              value={input.nameCategory}
              onChange={handleInput}
              placeholder="brand of new category"
              className="flex-auto bg-[#fff] border-[#6b7280] border-[1px] px-2 py-3 text-base w-full"
            />
          </div>
          <button
            type="submit"
            className="px-2 py-3 bg-red-600 mt-6 rounded-lg text-white hover:bg-red-400 "
          >
            Create new product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
