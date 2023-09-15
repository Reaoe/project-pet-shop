import React from 'react';
import anh from '../../img/a1.jpg';
import path from '../../ultils/path';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    img: 'https://matpetfamily.com/wp-content/uploads/2023/09/c7cadcd7b7d2628c3bc3-e1694153315563-270x270.jpg',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 2,
    img: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 3,
    img: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/378081409_852922006203709_947746487416276016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=QXdkoKNyLHkAX-5U4_z&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCsWLg27qqu9igveO1Ztef1IVSpRSeMDDfR-hMtNlYufQ&oe=650483C6',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 4,
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/375055729_851480609681182_7079421094298647830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=__TLO2NK-aAAX--k7jV&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCqjmTmFYGxHlruYjhnImMDs_hRRG-u2-X-D-4JLslx9Q&oe=65055757',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 5,
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/375055729_851480609681182_7079421094298647830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=__TLO2NK-aAAX--k7jV&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCqjmTmFYGxHlruYjhnImMDs_hRRG-u2-X-D-4JLslx9Q&oe=65055757',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 6,
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/375055729_851480609681182_7079421094298647830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=__TLO2NK-aAAX--k7jV&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCqjmTmFYGxHlruYjhnImMDs_hRRG-u2-X-D-4JLslx9Q&oe=65055757',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
];

const Home = () => {
  return (
    <div className="relative w-[92%] mx-auto flex flex-col gap-10 py-10 border-b">
      {/* sản phẩm nổi bật */}
      <div className="flex flex-col gap-10">
        <h1 className="w-full flex items-center justify-center font-black text-3xl text-blue-400">
          Sản phẩm nổi bật
        </h1>
        <div className="flex gap-3">
          {data.slice(0, 4).map((item) => {
            console.log(item.img);
            return (
              <div className="w-1/4 flex flex-col gap-4">
                <img
                  src={item.img}
                  key={item.id}
                  alt="..."
                  className="object-cover w-full h-[400px]"
                />
                {/* console.log(data) */}
                <div className="w-full flex flex-col gap-3">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <span className="text-blue-500 text-xl">{item.gia}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* <img src={anh} alt="" />
          <h3 className="text-2xl font-bold">Poodle nâu dễ thương</h3>
          <span className="text-blue-500 text-xl">13.000.000</span> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[120px] border-2 h-[40px] text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500">
            <span className="w-full h-full flex justify-center items-center cursor-pointer ">
              Xem thêm{'>'}
            </span>
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
              <div className="w-full flex flex-col gap-4">
                <img
                  src={item.img}
                  key={item.id}
                  alt="..."
                  className="object-cover w-full h-[400px]"
                />
                {/* console.log(data) */}
                <div className="w-full flex flex-col gap-3">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <span className="text-blue-500 text-xl">{item.gia}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* <img src={anh} alt="" />
          <h3 className="text-2xl font-bold">Poodle nâu dễ thương</h3>
          <span className="text-blue-500 text-xl">13.000.000</span> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[120px] border-2 h-[40px] text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500">
            <span className="w-full h-full flex justify-center items-center cursor-pointer ">
              Xem thêm{'>'}
            </span>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col gap-10">
        <h1 className="w-full flex items-center justify-center font-black text-3xl text-blue-400">
          Phụ kiện thú cưng
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {data.slice(0, 4).map((item) => {
            console.log(item.img);
            return (
              <div className="w-full flex flex-col gap-4">
                <img
                  src={item.img}
                  key={item.id}
                  alt="..."
                  className="object-cover w-full h-[400px]"
                />
                {/* console.log(data) */}
                <div className="w-full flex flex-col gap-3">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <span className="text-blue-500 text-xl">{item.gia}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* <img src={anh} alt="" />
          <h3 className="text-2xl font-bold">Poodle nâu dễ thương</h3>
          <span className="text-blue-500 text-xl">13.000.000</span> */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[120px] border-2 h-[40px] text-white bg-blue-500 rounded-md hover:text-blue-500 hover:bg-white hover:border-blue-500">
            <span className="w-full h-full flex justify-center items-center cursor-pointer ">
              Xem thêm{'>'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
