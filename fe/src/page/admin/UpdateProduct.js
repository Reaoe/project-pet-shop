import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const UpdateProduct = ({ editProduct, render }) => {
  console.log(editProduct._id);
  const [dataCategoryChild, setDataCategoryChild] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryID, setDataCategoryID] = useState();
  const [errors, setErrors] = useState({});
  const imgRef = useRef(null);
  const [image, setImage] = useState('');

  const [input, setInput] = useState({
    nameProduct: editProduct.productName,
    category: editProduct.category.nameCategory,
    price: editProduct.price,
    quantity: editProduct.stockQuantity,
    decription: editProduct.description,
    img: editProduct.image,
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
  const handleOptions = () => {
    return dataCategory?.map((item) => {
      return <option key={item.id}>{item.nameCategory}</option>;
    });
  };
  const optionID = (event) => {
    const selectID = dataCategory.find(
      (item) => item.nameCategory === event.target.value
    );

    if (selectID) {
      const idchild = selectID._id;
      console.log(idchild);
      axios
        .get(`http://localhost:8080/api/v1/category/${idchild}`)
        .then((response) => {
          setDataCategoryChild(response.data.data.getOneCategory);
          console.log(response.data.data.getOneCategory);
        })
        .catch((error) => console.log(error));
    }
  };
  const optionIDChild = (event) => {
    const selectIDChild = dataCategoryChild.find(
      (item) => item.nameCategory === event.target.value
    );
    if (selectIDChild) {
      const id = selectIDChild._id;
      console.log(id);
      setDataCategoryID(id);
    }
  };
  const handleOptionsChild = () => {
    return dataCategoryChild?.map((item) => {
      return <option key={item.id}>{item.nameCategory}</option>;
    });
  };
  const [getFile, setFile] = useState({});
  const handlfile = (e) => {
    setFile(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleImgClick = () => {
    imgRef.current.click();
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (input.nameProduct === '') {
      // errorSubmit.nameProduct = 'vui lòng nhập nameproduct';
      toast.error('vui lòng nhập nameproduct');

      flag = false;
    }
    if (dataCategory === '') {
      // errorSubmit.category = 'vui lòng nhập category';
      toast.error('vui lòng chọn category');

      flag = false;
    }
    if (dataCategoryChild === '') {
      // errorSubmit.brand = 'vui lòng nhập brand';
      toast.error('vui lòng chọn brand');

      flag = false;
    }
    if (input.price === '') {
      toast.error('vui lòng nhập price');

      // errorSubmit.price = 'vui lòng nhập price';
      flag = false;
    }
    if (input.quantity === '') {
      toast.error('vui lòng nhập quantity');

      // errorSubmit.quantity = 'vui long nhap quantity';
      flag = false;
    }
    //xử lý file

    if (Object.keys(image).length !== 0) {
      let getSize = image[0]['size'];
      let getType = image[0]['type'];
      const duoi = ['png', 'jpg', 'qpeg', 'PNG', 'JPG'];
      let tach = getType.split('/');
      // console.log(tach[1]);

      if (getSize > 1024 * 1024) {
        errorSubmit.avata = 'lỗi';
      } else if (!duoi.includes(tach[1])) {
        errorSubmit.avata = 'lỗi';
      }
    }
    if (flag) {
      const formData = new FormData();
      formData.append('productName', input.nameProduct);
      formData.append('category', categoryID);
      formData.append('price', input.price);
      formData.append('stockQuantity', input.quantity);
      formData.append('description', input.decription);
      formData.append('image', getFile[0]);

      await axios
        .patch(
          `http://localhost:8080/api/v1/product/${editProduct._id}`,
          formData
        )
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
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
            if (error.response.status === 500) {
              toast.error('vui lòng chọn category và brand');
            }
          }
        });
    }
  };
  return (
    <div className="w-full flex flex-col gap-4 relative">
      <div className="h-[69px] w-full"></div>
      <div className="p-4 border-b w-full bg-gray-100 flex justify-between items-center fixed top-0">
        <h1 className="text-3xl font-bold tracking-tight">Update Product </h1>
      </div>
      <div className="p-4">
        <form enctype="multipart/form-data" onSubmit={handleUpdate}>
          <div className="flex flex-col h-[78px] gap-2">
            <label>Name Product</label>
            <input
              type="text"
              name="nameProduct"
              value={input.nameProduct}
              onChange={handleInput}
              placeholder="Name of new product"
              className="flex-auto bg-[#fff] border-[#6b7280] border-[1px] px-2 py-3 text-base w-full"
            />
          </div>
          <div className="w-full flex gap-4">
            <div className="flex flex-col h-[78px] gap-2 w-full">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={input.price}
                onChange={handleInput}
                placeholder="Price of new product"
                className="flex-auto bg-[#fff] border-[#6b7280] border-[1px] px-2 py-3 text-base w-full"
              />
            </div>
            <div className="flex flex-col h-[78px] gap-2 w-full">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={input.quantity}
                onChange={handleInput}
                placeholder="Quantity of new product"
                className="flex-auto bg-[#fff] border-[#6b7280] border-[1px] px-2 py-3 text-base w-full"
              />
            </div>
          </div>
          <div className="w-full flex gap-4">
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
            <div className="flex flex-col gap-2 flex-auto">
              <label>Brand</label>
              <select
                id="brand"
                onChange={optionIDChild}
                // value={input.category.nameCategory}
                className="flex-auto bg-[#fff] border-[#6b7280] border-[1px] px-2 py-3 text-base w-full"
              >
                <option>-----CHOOSE------</option>

                {handleOptionsChild()}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label for="decription">Description</label>
            <textarea
              id="decription"
              name="decription"
              rows="4"
              cols="50"
              value={input.decription}
              onChange={handleInput}
            ></textarea>
          </div>

          <div className="flex flex-col gap-4" onClick={handleImgClick}>
            <label>Upload Image</label>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="w-[150px] object-cover"
              />
            ) : (
              <img src={input.img} alt="" className="w-[150px] object-cover" />
            )}
            {/* <img src={input.img} alt="" className="w-[100px] object-cover" /> */}
            <input
              type="file"
              ref={imgRef}
              onChange={handlfile}
              className="file:border-none file:rounded-full file:bg-blue-500 file:py-3 file:m-2 file:text-white file:px-6 file:hover:cursor-pointer"
              style={{ display: 'none' }}
            />
            {/* <div>
              <img src={input.img} alt="" className="w-[100px] object-cover" />
            </div> */}
            <div>
              <img src={getFile} alt="" className="w-[100px] object-cover" />
            </div>
          </div>
          <button
            type="submit"
            className="px-2 py-3 bg-red-600 mt-6 rounded-lg text-white hover:bg-red-400 "
          >
            Update new product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
