import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../component';
import axios from 'axios';

const Services = () => {
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
  return (
    <div className="w-[92%] mx-auto flex flex-row">
      <div className="w-1/3 border-2">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-y-6 px-4 py-8">
          {data.map((item) => {
            return (
              <div className="border-2 rounded-3xl flex flex-col justify-start mx-4">
                <img
                  src={item.image}
                  alt=""
                  key={item._id}
                  className="object-cover w-full h-[380px] rounded-3xl"
                />
                <div>
                  <h1
                    className="text-2xl font-bold mt-6
                  "
                  >
                    {item.productName}
                  </h1>
                  <p className="text-blue-500 text-xl">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
