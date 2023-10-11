import React, { useEffect, useState } from 'react';
import nen from '../../img/nen.jpg';
import { Link } from 'react-router-dom';
import path from '../../ultils/path';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const kt = ['true'];
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errorsSubmit = [];
    let flag = true;

    if (inputs.email === '') {
      errorsSubmit.email = 'Vui lòng nhập email';
      flag = false;
    }
    if (inputs.password === '') {
      errorsSubmit.password = 'Vui lòng nhập mật khẩu';
      flag = false;
    }
    if (!flag) {
      setErrors(errorsSubmit);
    } else {
      const data = {
        email: inputs.email,
        password: inputs.password,
      };

      axios
        .post('http://localhost:8080/api/v1/users/login', data)
        .then((response) => {
          if (response.data.error) {
            setErrors(response.data.error);
          } else {
            localStorage.setItem('login', JSON.stringify(response.data));
            navigate('/');
          }
        });
      localStorage.setItem('kt', JSON.stringify(kt));
    }
  }
  function renderError() {
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <p key={index}>{errors[key]}</p>;
      });
    }
  }

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={nen} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-around items-center">
        <h1 className="w-full  max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
          Pet Shop
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details
            </p>
          </div>
          {renderError()}
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={inputs.email}
                onChange={handleInput}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputs.password}
                onChange={handleInput}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember Me for 30 days</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot Password ?
              </p>
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Dont have account?
              <Link to={`/${path.REGISTER}`}>
                <span className="font-semibold underline underline-offset-2 cursor-pointer">
                  Sign up for free
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
