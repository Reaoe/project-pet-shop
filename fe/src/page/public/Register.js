import React, { useState } from 'react';
import nen from '../../img/nen.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
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
    let errorsSubmit = {};
    let flag = true;

    if (inputs.email === '') {
      errorsSubmit.email = 'Vui lòng nhập email';
      flag = false;
    }
    if (inputs.password === '') {
      errorsSubmit.password = 'Vui lòng nhập Mật Khẩu';
      flag = false;
    }

    if (!flag) {
      setErrors(errorsSubmit);
    } else {
      const data = {
        email: inputs.email,
        password: inputs.password,
      };
      //    console.log(data)
      axios
        .post('http://localhost:8080/api/v1/users/signup', data)
        .then((res) => {
          if (res.data.errors) {
            setErrors(res.data.errors);
          } else {
            console.log(res.data);
          }
        });
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
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-around items-center">
        {/* <h1 className="w-full  max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
          Pet Shop
        </h1> */}

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2 text-blue-500">
              Register
            </h3>
            <p className="text-base mb-2">
              Welcome to PetShop. You can register an account here
            </p>
          </div>
          {renderError()}
          <form enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={inputs.email}
                onChange={handleInput}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={inputs.password}
                onChange={handleInput}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              {/* <input
                type="password"
                placeholder="Confirm Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              /> */}
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">
                  I agree to the Terms and Conditions of Pet Shop
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
              >
                Register
              </button>
              <Link to="/login">
                <button className="w-full bg-white my-2 font-semibold text-[#060606] border border-black  rounded-md p-4 text-center flex items-center justify-center">
                  Already have an account ?
                </button>
              </Link>
            </div>
          </form>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Dont have account?
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign up for free
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={nen} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Register;
