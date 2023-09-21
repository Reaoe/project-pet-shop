import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../component';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const params = useParams();
  // console.log(params);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/product/${params.id}`)
      .then((res) => {
        setData(res.data.data.getOneProduct);
        console.log(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-[92%] mx-auto flex pt-6">
      <div className="w-1/3">
        <Sidebar />
      </div>

      <div className="w-full flex gap-6">
        <img
          src={data.image}
          alt=""
          className="object-cover h-[409px] w-[345px] rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <h1 className="font-black text-3xl">{data.productName}</h1>
          <div className="flex">
            <p className="text-blue-500 text-xl font-bold">{data.price}</p>
            <span className="text-blue-500">đ</span>
          </div>
          <div className="flex justify-start gap-2">
            <p>Số Lượng:</p>
            <input
              type="text"
              value={1}
              className="w-6 h-6 flex justify-center items-center"
            />
            <div>
              <button>{'<'}</button>
              <button>{'>'}</button>
            </div>
          </div>
          <button className="w-[184px] bg-while px-4 py-2 rounded-xl border-dashed border-2 border-blue-400 hover:bg-blue-400 hover:text-white">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
