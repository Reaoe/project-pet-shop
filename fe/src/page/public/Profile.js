import React from 'react';

const Profile = () => {
  return (
    <div className="w-[92%] mx-auto flex">
      <div className="w-1/4 flex flex-col gap-y-3">
        <img
          src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/45111567_497920167375700_6804038957840465920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=dpLGE9NeqDQAX-z1iBZ&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBHvbAHE_faNle8gPw_PWEnlAZgN39W2xplw5NtNtnUxw&oe=652C797A"
          alt=""
          className="object-cover w-10 h-10"
        />
        <div className="flex gap-3 ">
          <i>icon</i>
          <h1>Tài Khoản Của Tôi</h1>
        </div>
        <h2>Hồ sơ</h2>
        <h2>Địa Chỉ</h2>
        <h2>Đổi mật khẩu</h2>
      </div>
      <div className="w-[90%] mx-auto flex flex-col pr-40">
        <div className="w-full p-5 border-b-2">
          <h1>Hồ Sơ Của Tôi</h1>
          <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        </div>
        <div className="flex justify-between p-5">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h2>Email:</h2>
              <span>Lethanhhieu202@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <h2>Số điện thoại:</h2>
              <span>0397513325</span>
            </div>
          </div>
          <div className="">
            <img alt="" src="" />
            <button>Chọn Ảnh</button>
            <p>Dung lượng file tối đa 1MB</p>
            <p>Định dạng: .JPEG,.PNG,.JPG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
