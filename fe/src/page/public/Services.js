import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../component';
import axios from 'axios';
import a1 from '../../img/service1.jpg';
import a2 from '../../img/service2.jpg';
import a3 from '../../img/service3.jpg';
import a4 from '../../img/service4.jpg';

const Services = () => {
  const data = [
    {
      anh: a1,
      text: 'thú cưng có trọng lượng dưới 2kg',
      gia: '250K',
    },
    {
      anh: a2,
      text: 'thú cưng có trọng lượng dưới 5kg',
      gia: '350K',
    },
    {
      anh: a3,
      text: 'thú cưng có trọng lượng dưới 10kg',
      gia: '500K',
    },
    {
      anh: a4,
      text: 'thú cưng có trọng lượng dưới 20kg',
      gia: '650K',
    },
  ];
  return (
    <div className="w-[92%] mx-auto flex flex-col">
      <div className="py-2 border-2 bg-[#00205B] mb-10 px-4 text-white rounded-xl">
        <h1 className="text-3xl font-black border-b-2 pb-1">
          Bảng giá cắt tỉa lông
        </h1>
        <p className="text-lg pt-10">
          Bảng giá cắt lông chó mèo đã bao gồm cả: Dịch vụ tắm cho chó mèo trọn
          gói, sấy khô, chải lông rụng, cắt dũa móng, vệ sinh tai mà không phát
          sinh thêm bất cứ phụ phí nào khác. Giá dịch vụ thực tế dựa theo hiện
          trạng kích cỡ, trọng lượng và nhu cầu phát sinh thêm của khách hàng.
        </p>
        <div className="w-full flex flex-auto justify-between py-5">
          {data?.map((el) => (
            <div className="flex flex-col p-3 border-2 rounded-xl">
              <img
                src={el.anh}
                alt=""
                className="object-cover h-[260px] w-[260px] rounded-2xl"
              />
              <div className="flex flex-col pt-3 px-3 pb-5 justify-center items-center ">
                <p>{el.text}</p>
                <p className="text-4xl font-semibold ">{el.gia}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between gap-10 ">
        <div className="w-full  border-2 bg-[#00205B] text-white px-4 py-2 rounded-2xl">
          <h1 className="text-3xl font-black border-b-2 pb-1">
            Bảng giá dịch vụ tắm spa, cạo lông chó mèo
          </h1>
          <div>
            <p className="text-lg pt-5">
              Bảng giá spa cho chó, dịch vụ tắm cho mèo giá rẻ trọn gói đã bao
              gồm gói tắm gội toàn diện, sấy khô, chải lông rụng, cắt dũa móng,
              vệ sinh tai theo yêu cầu. Giá dịch vụ thực tế dựa theo hiện trạng
              kích cỡ, trọng lượng và độ dài của lông.
            </p>
            <p className="text-lg pt-5">
              Dịch vụ có thể phát sinh thêm phụ phí theo yêu cầu thêm của khách
              hàng như: cạo lông, gỡ rối lông hoặc cắt tỉa lông một khu vực cụ
              thể nào đó.
            </p>
            <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 pt-5">
              <li className="">
                <strong>Một số giống chó mèo lông dài:</strong>
                Pomeranian (Phốc sóc), Poodle, Shiba Inu, Akita, Yorkshire,
                Collie, Papillon, Maltese, Shih Tzu, Tibetan Mastiff (Ngao
                Tạng), Becgie, Chow Chow, Alaska, Corgi, Pekingese (Bắc Kinh),
                Chin (Nhật), Bichon, Cooker, Schnauzer, Golden, Husky, Samoyed…
                và tất cả các giống Mèo.
              </li>
              <li>
                <strong>Một số giống chó lông ngắn:</strong>
                Chihuahua, Pug, Dachshund (Lạp xưởng), Dalmatian (Đốm), Beagle,
                Bulldog, Boston, Labrador, Phú Quốc, Minpin (Phốc hươu)…
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col  border-2 bg-[#00205B] p-4 rounded-xl">
          <div className="w-full bg-white px-4 py-2 rounded-md mb-4 ">
            <h1 className="text-2xl font-black border-b-2 border-[#ccc]">
              Bảng tắm chó
            </h1>
            <table className=" w-full table-auto">
              <thead>
                <tr className="py-2 ">
                  <th className="text-center py-2">Cân Nặng</th>
                  <th className="text-center py-2">Lông ngắn</th>
                  <th className="text-center py-2">Lông dài</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2">5kg</td>
                  <td className="text-center py-2">100K</td>
                  <td className="text-center py-2">150K</td>
                </tr>
                <tr>
                  <td className="text-center py-2">5 - 10kg</td>
                  <td className="text-center py-2">150K</td>
                  <td className="text-center py-2">250K</td>
                </tr>
                <tr>
                  <td className="text-center py-2">10 - 20kg</td>
                  <td className="text-center py-2">250K</td>
                  <td className="text-center py-2">350K</td>
                </tr>
                <tr>
                  <td className="text-center py-2">20 - 40kg</td>
                  <td className="text-center py-2">350K</td>
                  <td className="text-center py-2">500K</td>
                </tr>
                <tr>
                  <td className="text-center py-2">40Kg</td>
                  <td className="text-center py-2">500K</td>
                  <td className="text-center py-2">650K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full bg-white px-4 py-2 rounded-md">
            <h1 className="text-2xl font-black border-b-2 border-[#ccc]">
              Bảng tắm mèo
            </h1>
            <table className=" w-full table-auto">
              <thead>
                <tr className=" py-2 ">
                  <th className="text-center py-2">Cân Nặng</th>
                  <th className="text-center py-2">Lông ngắn/dài</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2">5kg</td>
                  <td className="text-center py-2">200K</td>
                </tr>
                <tr>
                  <td className="text-center py-2">5 - 10kg</td>
                  <td className="text-center py-2">300K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
