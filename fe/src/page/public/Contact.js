import React from 'react';

const Contact = () => {
  const data = [
    {
      id: 1,
      icon: 'icon',
      name: 'Địa chỉ 1:',
      text: 'Hải Châu - Đà Nẵng',
    },
    {
      id: 2,
      icon: 'icon',
      name: 'Địa chỉ 2:',
      text: 'Núi Thành - Quảng Nam',
    },
    {
      id: 3,
      icon: 'icon',
      name: 'Số điện thoại: ',
      text: '0987654321',
    },
  ];
  return (
    <div className="w-[92%] mx-auto flex flex-col gap-5">
      <h1 className="my-10 text-3xl font-black">Contact</h1>
      <div className="border-2 pl-10">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-2 text-xl ">
              <i>{item.icon}</i>
              <div className="flex gap-2">
                <p>{item.name}</p>
                <span>{item.text}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <form>
          <div className="w-full flex flex-col gap-4 rounded-none px-4 py-4">
            <div className="w-[60%] mx-auto flex gap-5">
              <input
                type="name"
                placeholder="Name"
                className="w-1/2 border-b"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 border-b"
              />
            </div>
            <div className="w-[60%] mx-auto flex gap-5">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-1/2 border-b"
              />
              <input
                type="text"
                placeholder="Loại thú cưng"
                className="w-1/2 border-b"
              />
            </div>
            <div className="w-[60%] mx-auto">
              <input
                type="text"
                placeholder="Câu hỏi"
                className="w-full border-b"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
