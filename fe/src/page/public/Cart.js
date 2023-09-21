import React from 'react';
import icons from '../../ultils/icons';
import { Link } from 'react-router-dom';
import path from '../../ultils/path';
import momo from '../../img/momo.jpg';
const { AiFillCaretDown, AiFillCaretUp, BsTrash, BsArrowRight } = icons;

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
      <div className="w-full border-b-2 border-gray-400 py-3">
        <Link to={`/${path.PRODUCT}`}>
          <h1 className="text-lg font-medium hover:cursor-pointer">
            {'<'}Tiếp tục mua hàng
          </h1>
        </Link>
      </div>
      <div className="flex ">
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
        <div className="w-1/3 border-2 ml-4 mt-4 p-4 bg-[#565ABB] rounded-xl">
          <h1 className="text-2xl font-bold text-white mb-4">
            Thông tin thanh toán
          </h1>
          <h2 className="text-white">Loại thanh toán</h2>
          <div>
            <img src={momo} alt="" className="w-[70px] my-4" />
          </div>
          <div className="flex flex-col gap-2 mb-4 border-b-2 pb-4 border-[#cccc]">
            <div className="flex gap-2 text-white">
              <h2>Họ tên khách hàng:</h2>
              <span>Lê Thanh Hiếu</span>
            </div>
            <div className="flex gap-2 text-white">
              <h2>Địa chỉ giao hàng:</h2>
              <span>Quảng Ngãi</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-white">
              <h2>Tổng</h2>
              <p>
                10.000.000<span>đ</span>
              </p>
            </div>
            <div className="flex justify-between text-white">
              <h2>Phí vận chuyển</h2>
              <p>
                20.000<span>đ</span>
              </p>
            </div>
            <div className="flex justify-between text-white">
              <h2>Tổng tiền</h2>
              <p>
                10.020.000<span>đ</span>
              </p>
            </div>
          </div>
          <button className="w-full bg-[#4DE1C1] my-6 py-2 rounded-md flex justify-center items-center gap-2 text-white text-xl">
            Thanh toán <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;
