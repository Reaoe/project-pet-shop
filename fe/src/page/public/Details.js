import React from 'react';
import { Sidebar } from '../../component';

const Details = () => {
  return (
    <div className="w-[92%] mx-auto flex pt-6">
      <div className="w-1/3">
        <Sidebar />
      </div>
      <div className="w-full flex gap-6">
        <img
          src="https://matpetfamily.com/wp-content/uploads/2023/09/c7cadcd7b7d2628c3bc3-e1694153315563-270x270.jpg"
          alt=""
          className="object-cover h-[409px] w-[345px] rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <h1 className="font-black text-3xl">Husky đen</h1>
          <div className="flex">
            <p className="text-blue-500 text-xl font-bold">12.000.000</p>
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
          <button className="bg-while px-4 py-2 rounded-xl border-dashed border-2 border-blue-400 hover:bg-blue-400 hover:text-white">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
