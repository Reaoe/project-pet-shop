import React from 'react';
import logo from '../img/logo.png';
import icons from '../ultils/icons';
import Search from './Search';
import { Link, NavLink } from 'react-router-dom';
import path from '../ultils/path';
import { navigation } from '../ultils/contact';
const { PiShoppingCartSimpleBold } = icons;

const header = () => {
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
          {/* <ul className="flex flex-row text-xl items-center gap-24">
            <li>
              <a className="hover:text-gray-500" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Content
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
          </ul> */}
        </div>

        <Link to={`/${path.CART}`}>
          <div className="flex items-center relative ">
            <i className="px-2 py-2 rounded-full border-2 border-sky-400  hover:text-blue-400 hover:cursor-pointer">
              <PiShoppingCartSimpleBold />
            </i>
            <span className="absolute right-0 top-4 font-bold bg-white rounded-full">
              0
            </span>
          </div>
        </Link>
        <div className="flex items-center">
          <Link to={`/${path.LOGIN}`}>
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] ">
              Sign in
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default header;
