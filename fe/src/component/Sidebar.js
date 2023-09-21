import React, { useEffect, useState } from 'react';

import axios from 'axios';

// const data = [
// {
//   id: 1,
//   name: 'cho',

// },
//   {
//     id: 2,
//     name: 'Cát vệ sinh',
//   },
//   {
//     id: 3,
//     name: 'Chuồng',
//   },
//   {
//     id: 4,
//     name: 'Chó Alsaka Malamute',
//   },
//   {
//     id: 5,
//     name: 'Chó Bichon',
//   },
//   {
//     id: 6,
//     name: 'Cho Corgi',
//   },
//   {
//     id: 7,
//     name: 'Mèo chân ngắn',
//   },
//   {
//     id: 8,
//     name: 'Mèo tai cụp',
//   },
// ];
const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/category')
      .then((response) => {
        setData(response.data.data.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // const fetchCategories = async () => {
  //   const response = await apiGetCategories();
  //   console.log(response.data);
  // };
  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  return (
    <div className="w-full flex flex-col justify-start gap-5">
      <h1 className="font-semibold text-3xl text-blue-500">
        Danh mục sản phẩm
      </h1>
      <div className="flex flex-col gap-2 px-8">
        {data.map((item) => {
          // console.log(item.parent.nameCategory);
          // console.log(item.nameTypeCategory);
          return (
            <div className="" key={item.id}>
              <p className="text-base hover:cursor-pointer">
                {item.nameTypeCategory}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
