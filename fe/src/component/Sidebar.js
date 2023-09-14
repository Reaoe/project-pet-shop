import React from 'react';

const data = [
  {
    id: 1,
    name: 'Balo',
  },
  {
    id: 2,
    name: 'Cát vệ sinh',
  },
  {
    id: 3,
    name: 'Chuồng',
  },
  {
    id: 4,
    name: 'Chó Alsaka Malamute',
  },
  {
    id: 5,
    name: 'Chó Bichon',
  },
  {
    id: 6,
    name: 'Cho Corgi',
  },
  {
    id: 7,
    name: 'Mèo chân ngắn',
  },
  {
    id: 8,
    name: 'Mèo tai cụp',
  },
];
const Sidebar = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-5">
      <h1 className="font-semibold text-3xl text-blue-500">
        Danh mục sản phẩm
      </h1>
      <div className="flex flex-col gap-2 px-8">
        {data.map((item) => {
          return (
            <div className="" key={item.id}>
              <p className="text-base hover:cursor-pointer"> {item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
