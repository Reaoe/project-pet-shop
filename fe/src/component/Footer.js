import React from 'react';
import icons from '../ultils/icons';
const {
  BiMap,
  BsTelephone,
  IoIosMail,
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
  BsArrowRightCircle,
} = icons;

const Footer = () => {
  return (
    <div className="w-[92%] flex flex-row justify-start mx-auto">
      <div className="w-1/4 flex flex-col ">
        <h1 className="text-xl font-black py-4">Liên lạc</h1>
        <div className="w-[85%] flex flex-col justify-start">
          <div className="flex justify-start items-center gap-4 py-3 border-b-2">
            <i className="text-blue-400 text-xl">
              <BiMap />
            </i>

            <div className="flex gap-1">
              <span className="font-bold">Địa Chỉ:</span>
              <p className="font-light">Hải Châu - Đà Nẵng</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 py-3 border-b-2">
            <i className="text-blue-400 text-xl">
              <BsTelephone />
            </i>
            <div className="flex gap-1">
              <span className="font-bold">Số điện thoại:</span>
              <p className="hover:text-blue-400 cursor-pointer font-light">
                0987654321
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4 py-3 border-b-2">
            <i className="text-blue-400 text-xl">
              <IoIosMail />
            </i>
            <div className="flex gap-1">
              <span className="font-bold cursor-pointer">Email:</span>
              <p className="hover:text-blue-400 cursor-pointer font-light">
                Doclang0801@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col ">
        <h1 className="text-xl font-black py-4">Theo dõi chúng tôi trên</h1>
        <div className="flex justify-start items-center gap-2 py-3">
          <i className="text-black text-2xl">
            <BiLogoFacebookSquare />
          </i>
          <span className="font-bold">Facebook</span>
        </div>
        <div className="flex justify-start items-center gap-2 py-3">
          <i className="text-black text-2xl">
            <BiLogoInstagram />
          </i>
          <span className="font-bold">Instagram</span>
        </div>
        <div className="flex justify-start items-center gap-2 py-3">
          <i className="text-black text-2xl">
            <BiLogoTwitter />
          </i>
          <span className="font-bold">Twitter</span>
        </div>
        <div className="flex justify-start items-center gap-2 py-3">
          <i className="text-black text-2xl">
            <BiLogoYoutube />
          </i>
          <span className="font-bold">Youtube</span>
        </div>
      </div>
      <div className="w-1/4 flex flex-col">
        <h1 className="text-xl font-black py-4">Dịch vụ</h1>
        <div className="flex flex-col gap-3 py-3">
          <p>Hỗ trợ trực tuyến</p>
          <p>Liên hệ chúng tôi</p>
          <p>Tình trạng đặt hàng</p>
          <p>Thay đổi địa điểm</p>
          <p>Câu hỏi thường gặp</p>
        </div>
      </div>
      <div className='"w-1/4 flex flex-col'>
        <h1 className="text-xl font-black py-4">
          Giới thiệu về người mua hàng
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="địa chỉ email của bạn"
            className="py-2 w-full rounded-none border-2 "
          ></input>
          <button className="w-[20%] bg-blue-500 flex border-2 justify-center items-center text-white hover:text-blue-500 hover:bg-white hover:border-blue-400">
            <BsArrowRightCircle />
          </button>
        </div>
        <p className="my-4 py-4 w-[70%]">
          Nhận thông tin cập nhật mới nhất từ trang web của chúng tôi và tự cập
          nhật..
        </p>
      </div>
    </div>
  );
};

export default Footer;
