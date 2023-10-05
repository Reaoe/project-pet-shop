import React, { useEffect, useState } from 'react';
import icons from '../../ultils/icons';
import { Link } from 'react-router-dom';
import path from '../../ultils/path';
import momo from '../../img/momo.png';
import tienmat from '../../img/tienmat.jpg';
import visa from '../../img/visa.png';
import axios from 'axios';
const { AiFillCaretDown, AiFillCaretUp, BsTrash, BsArrowRight } = icons;

const Cart = () => {
  var productCart = localStorage.getItem('productcart');
  if (productCart) {
    productCart = JSON.parse(productCart);
    // console.log(productCart);
  }
  const ArrayProductCart = Object.values(productCart);
  console.log(ArrayProductCart.length);
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/product')
      .then((response) => {
        setDataProduct(response.data.data.getAllProduct);
        console.log(response.data.data.getAllProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  // xóa theo id

  const handleId = (id) => {
    console.log(id);
    const idRemove = id;
    if (productCart.hasOwnProperty(idRemove)) {
      delete productCart[idRemove];
      localStorage.setItem('productcart', JSON.stringify(productCart));
    }
  };
  /// thành tiền
  const rederMoney = () => {
    let quantity, price, money;
    dataProduct.map((item) => {
      ArrayProductCart.map((el) => {
        if (item._id === el.id) {
          quantity = el.quantity;
          price = item.price;
          money = quantity * price;
          // console.log(money);
          // return money;
        }
        money += money;
      });
    });
    return money;
  };

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
              Bạn đang có <span>{ArrayProductCart.length}</span> món đồ trong
              giỏ hàng
            </p>
          </div>

          {dataProduct.map((item) => {
            return ArrayProductCart.map((el) => {
              if (item._id === el.id) {
                return (
                  <>
                    <div className=" grid grid-cols-5 items-center justify-center border-2 rounded-md">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[125px] h-[128px] object-cover rounded-md"
                      />
                      <div>
                        <h1>{item.productName}</h1>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-2">
                        <p>{el.quantity}</p>
                        <div className="hover:cursor-pointer">
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </div>
                      <p>
                        {item.price}
                        <span>đ</span>
                      </p>
                      <div className="">
                        <BsTrash
                          onClick={() => handleId(item._id)}
                          className="hover:cursor-pointer"
                        />
                      </div>
                    </div>
                  </>
                );
              }
            });
          })}
        </div>
        <div className="w-1/3 border-2 ml-4 mt-4 p-4  rounded-xl">
          <h1 className="text-2xl font-bold mb-4">Thông tin thanh toán</h1>
          <h2 className="bg-gray-300 p-2">Hình thức Thanh Toán</h2>
          <div className="pb-4 border-b-2 flex justify-between">
            <img
              src={momo}
              alt=""
              className="w-[100px] my-4 px-4 py-2 bg-white border-[1px] rounded-xl hover:border-blue-400 hover:border-2 hover:cursor-pointer"
            />
            <img
              src={tienmat}
              alt=""
              className="w-[100px] my-4 px-4 py-2 bg-white border-[1px] rounded-xl hover:border-blue-400 hover:border-2 hover:cursor-pointer"
            />
            <img
              src={visa}
              alt=""
              className="w-[120px] my-4 px-4 py-2 bg-white border-[1px] rounded-xl hover:border-blue-400 hover:border-2 hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4 border-b-2 pb-4 ">
            <h2 className="bg-gray-300 p-2">Chi tiết giao dịch</h2>
            <div className="flex gap-2 ">
              <h2>Họ tên khách hàng:</h2>
              <span>Lê Thanh Hiếu</span>
            </div>
            <div className="flex gap-2 ">
              <h2>Địa chỉ giao hàng:</h2>
              <span>Quảng Ngãi</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
              <h2>Tổng tiền cần thanh toán</h2>

              <p>
                {rederMoney()}
                <span>đ</span>
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

export default Cart;
