import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../ultils/path';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/product')
      .then((response) => {
        setData(response.data.data.getAllProduct);
        console.log(response.data.data.getAllProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredItems = data
    .filter((item) => item.category.parent === '651185e9dda0c6450d54e894')
    .slice(0, 4);

  return (
    <div className="relative w-[92%] mx-auto flex flex-col gap-10 py-10 border-b">
      {/* sản phẩm nổi bật */}
      <div className="flex flex-col gap-10">
        <h1 className="w-full flex items-center justify-center font-black text-3xl text-blue-400">
          Sản phẩm nổi bật
        </h1>
        <div className="flex gap-3 justify-between">
          {data.slice(0, 4).map((item) => {
            // console.log(item.img);
            return (
              <Link to={`/${path.PRODUCT}/${item._id}`}>
                <div className="w-full flex flex-col gap-4">
                  <img
                    src={item.image}
                    key={item._id}
                    alt="..."
                    className="object-cover w-full h-[400px]"
                  />
                  {/* console.log(data) */}
                  <div className="w-full flex flex-col gap-3">
                    <h3 className="text-2xl font-bold">{item.productName}</h3>
                    <span className="text-blue-500 text-xl">{item.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* <img src={anh} alt="" />
          <h3 className="text-2xl font-bold">Poodle nâu dễ thương</h3>
          <span className="text-blue-500 text-xl">13.000.000</span> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[120px] border-2 h-[40px] text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500">
            <Link to={`/${path.PRODUCT}`}>
              <span className="w-full h-full flex justify-center items-center cursor-pointer ">
                Xem thêm{'>'}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------- */}
      {/* sản phẩm mới */}
      <div className="flex flex-col gap-10">
        <h1 className="w-full flex items-center justify-center font-black text-3xl text-blue-400">
          Sản phẩm mới
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {data.slice(0, 8).map((item) => {
            console.log(item.img);
            return (
              <Link to={`/${path.PRODUCT}/${item._id}`}>
                <div className="w-full flex flex-col gap-4">
                  <img
                    src={item.image}
                    key={item._id}
                    alt="..."
                    className="object-cover w-full h-[400px]"
                  />
                  {/* console.log(data) */}
                  <div className="w-full flex flex-col gap-3">
                    <h3 className="text-2xl font-bold">{item.productName}</h3>
                    <span className="text-blue-500 text-xl">{item.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* <img src={anh} alt="" />
          <h3 className="text-2xl font-bold">Poodle nâu dễ thương</h3>
          <span className="text-blue-500 text-xl">13.000.000</span> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[120px] border-2 h-[40px] text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500">
            <Link to={`/${path.PRODUCT}`}>
              <span className="w-full h-full flex justify-center items-center cursor-pointer ">
                Xem thêm{'>'}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col gap-10">
        <h1 className="w-full flex items-center justify-center font-black text-3xl text-blue-400">
          Phụ kiện thú cưng
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {filteredItems.map((item) => {
            // console.log(item.category.parent);
            if (item.category.parent === '651185e9dda0c6450d54e894') {
              return (
                <Link to={`/${path.PRODUCT}/${item._id}`}>
                  <div className="w-full flex flex-col gap-4">
                    <img
                      src={item.image}
                      key={item._id}
                      alt="..."
                      className="object-cover w-full h-[400px]"
                    />
                    {/* console.log(data) */}
                    <div className="w-full flex flex-col gap-3">
                      <h3 className="text-2xl font-bold">{item.productName}</h3>
                      <span className="text-blue-500 text-xl">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>

        {/* <img src={anh} alt="" />
          <h3 className="text-2xl font-bold">Poodle nâu dễ thương</h3>
          <span className="text-blue-500 text-xl">13.000.000</span> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[120px] border-2 h-[40px] text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500">
            <Link to={`/${path.PRODUCT}`}>
              <span className="w-full h-full flex justify-center items-center cursor-pointer ">
                Xem thêm{'>'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
