import React from 'react';
import icons from '../../ultils/icons';
import { Link } from 'react-router-dom';
import path from '../../ultils/path';
const { AiFillCaretDown, AiFillCaretUp, BsTrash } = icons;

const data = [
  {
    id: 1,
    img: 'https://inkythuatso.com/uploads/thumbnails/800/2022/05/nhung-dieu-hay-ho-it-nguoi-biet-ve-giong-meo-tam-the-13-09-47-35.jpg',
    name: 'Mèo tam thể',
    sex: 'Đực',
    price: '10.000.000',
  },
  {
    id: 2,
    img: 'https://thuthuatnhanh.com/wp-content/uploads/2022/06/Anh-cho-hai.jpg',
    name: 'Chó hài hước',
    sex: 'Đực',
    price: '2.000.000',
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/736x/cc/52/3f/cc523f7dc794dfed54aac0973348e541.jpg',
    name: 'Chó Cỏ',
    sex: 'Đực',
    price: '200.000',
  },
];
const dem = data.length;
const cart = () => {
  return (
    <div className="w-[92%] mx-auto font-normal text-lg">
      <div className="w-2/3 border-b-2 border-gray-400 py-3">
        <Link to={`/${path.PRODUCT}`}>
          <h1 className="text-lg font-medium hover:cursor-pointer">
            {'<'}Tiếp tục mua hàng
          </h1>
        </Link>
      </div>
      <div className="w-2/3 flex flex-col gap-6">
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-blue-400">Giỏ Hàng</h1>
          <p className="font-light">
            Bạn đang có <span>{dem}</span> món đồ trong giỏ hàng
          </p>
        </div>

        {data.map((item) => {
          return (
            <>
              <div className=" grid grid-cols-5 items-center justify-center border-2 rounded-md">
                <img
                  src={item.img}
                  alt=""
                  className="w-[125px] h-[128px] object-cover rounded-md"
                />
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.sex}</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <input type="text" value={1} className="w-6" />
                  <div className="hover:cursor-pointer">
                    <AiFillCaretUp />
                    <AiFillCaretDown />
                  </div>
                </div>
                <p>
                  {item.price}
                  <span>đ</span>
                </p>
                <div className="hover:cursor-pointer">
                  <BsTrash />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default cart;
