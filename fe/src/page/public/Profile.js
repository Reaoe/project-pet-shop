import React, { useEffect, useState } from 'react';
import icons from '../../ultils/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import path from '../../ultils/path';

const { ImProfile } = icons;

const Profile = () => {
  const navigate = useNavigate();

  var B = localStorage.getItem('kt');

  const logout = () => {
    localStorage.removeItem('kt');
    console.log(B);
    navigate('/login');
  };
  var idLogin = localStorage.getItem('login');
  if (idLogin) {
    idLogin = JSON.parse(idLogin);
  }
  var role = idLogin.data.user.role;
  var id = idLogin.data.user._id;
  console.log(typeof role);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/users/${id}`).then((response) => {
      console.log(response);
    });
  });

  const checkRole = () => {
    if (role === 'admin') {
      return (
        <>
          <Link to={path.ADMIN}>
            <h2>Admin</h2>;
          </Link>
        </>
      );
    } else return <h2>user</h2>;
  };
  return (
    <div className="w-[92%] mx-auto flex p-5 ">
      <div className="w-1/4 flex flex-col gap-y-3">
        <img
          src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/45111567_497920167375700_6804038957840465920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=dpLGE9NeqDQAX-z1iBZ&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBHvbAHE_faNle8gPw_PWEnlAZgN39W2xplw5NtNtnUxw&oe=652C797A"
          alt=""
          className="object-cover w-40 h-40 border-2"
        />
        <div className="flex gap-3 justify-start items-center">
          <ImProfile />
          <h1>Tài Khoản Của Tôi</h1>
        </div>
        <h2>Hồ sơ</h2>
        <h2>Địa Chỉ</h2>
        <h2>Đổi mật khẩu</h2>
        <h2 onClick={logout} className="cursor-pointer">
          Đăng Xuất
        </h2>
        <h2>{checkRole()}</h2>
      </div>
      <div className="w-[90%] mx-auto flex flex-col mr-40 border-2 p-2">
        <div className="w-full p-5 border-b-2">
          <h1 className="text-2xl font-extrabold">Hồ Sơ Của Tôi</h1>
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
          <div className="flex flex-col items-center border-l-2 pl-8">
            <img
              src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/45111567_497920167375700_6804038957840465920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=dpLGE9NeqDQAX-z1iBZ&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBHvbAHE_faNle8gPw_PWEnlAZgN39W2xplw5NtNtnUxw&oe=652C797A"
              alt=""
              className="h-20 w-20 border-2 rounded-full my-5"
            />
            <button className="px-5 py-2 border-2 hover:bg-[#cccc]">
              Chọn Ảnh
            </button>
            <div className="pt-4">
              <p>Dung lượng file tối đa 1MB</p>
              <p>Định dạng: .JPEG,.PNG,.JPG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
