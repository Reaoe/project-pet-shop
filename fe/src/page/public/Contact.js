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
      <div className="flex">
        <div className="w-full px-4">
          <h1 className="text-3xl font-black pb-1 text-[#6FD6FF] ">
            Just say hello !
          </h1>
          <p className="pb-5">Let us know more about you !</p>
          <form>
            <div className="flex w-full gap-4 mb-4 ">
              <input
                className="w-full rounded-lg"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-full rounded-lg"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex w-full gap-4 mb-4">
              <input
                className="w-full rounded-lg"
                type="text"
                placeholder="Mail"
              />
              <input
                className="w-full rounded-lg"
                type="email"
                placeholder="Phone"
              />
            </div>
            <textarea className="w-full" placeholder="Message"></textarea>
            <button className="bg-[#6FD6FF] text-white px-4 py-2 rounded-lg border-2 hover:border-[#6FD6FF] hover:bg-white hover:text-[#6FD6FF]">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full px-4">
          <h1 className="text-3xl font-black  text-[#6FD6FF] pb-10">
            Contact Information
          </h1>
          <p>
            <strong>Address: </strong>
            77 Xô Viết Nghệ Tĩnh, Hải Châu - Đà Nẵng
          </p>
          <p>
            <strong>Calls Us: +84 325 326 666</strong>
          </p>
          <p>We are open from Moday - Friday</p>
          <p>08.00 am - 05.00 pm</p>
          <h1 className="text-3xl font-black  text-[#6FD6FF] py-10">
            Follow Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
