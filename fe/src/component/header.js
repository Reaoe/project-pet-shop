import React, { useContext } from 'react';
import logo from '../img/logo.png';
import icons from '../ultils/icons';
import Search from './Search';
import { Link, NavLink } from 'react-router-dom';
import path from '../ultils/path';
import { navigation } from '../ultils/contact';
import avata from '../img/avata.png';
import { QuantityContext } from '../Context/QuantityContext';
const { PiShoppingCartSimpleBold } = icons;

const Header = () => {
  var quantity = localStorage.getItem('productcart');
  if (quantity) {
    quantity = JSON.parse(quantity);
  }

  var ArrayQuantity;

  if (quantity && Object.keys(quantity).length > 0) {
    ArrayQuantity = Object.values(quantity);
  } else {
    ArrayQuantity = [0];
  }
  // console.log(ArrayQuantity.length);
  var A = localStorage.getItem('kt');
  const renderLogin = () => {
    if (A) {
      A = JSON.parse(A);
      return (
        <Link to={`/${path.PROFILE}`}>
          <img src={avata} alt="" className="w-12 rounded-full" />
        </Link>
      );
    } else {
      return (
        <Link to={`/${path.LOGIN}`}>
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] ">
            Sign in
          </button>
        </Link>
      );
    }
  };
  return (
    <div className="bg-white border-b py-4">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="">
          <img className="w-16" src={logo} alt="...."></img>
        </div>
        <Search />
        <div className=" bg-white min-h-fit left-0 top-[-100%] w-auto flex items-center px-5">
          <ul className="flex flex-row text-lg items-center gap-24">
            {navigation.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className="hover:text-gray-500"
              >
                {item.value}
              </NavLink>
            ))}
          </ul>
        </div>

        <Link to={`/${path.CART}`}>
          <div className="flex items-center relative ">
            <i className="px-2 py-2 rounded-full border-2 border-sky-400  hover:text-blue-400 hover:cursor-pointer">
              <PiShoppingCartSimpleBold />
            </i>
            <span className="absolute right-0 top-4 font-bold bg-white rounded-full">
              {ArrayQuantity.length}
            </span>
          </div>
        </Link>
        <div className="flex items-center">{renderLogin()}</div>
      </nav>
    </div>
  );
};

export default Header;
