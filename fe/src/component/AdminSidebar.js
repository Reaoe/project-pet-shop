import React, { Fragment, useState } from 'react';
import { adminSidebar } from '../ultils/contact';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import clsx from 'clsx';
import { AiOutlineCaretDown, AiOutlineCaretRight } from 'react-icons/ai';

const activedStyle = 'px-4 py-2 flex items-center gap-2 text-sm bg-gray-500';
const notActivedStyle =
  'px-4 py-2 flex items-center gap-2 text-sm hover:bg-gray-600';

const AdminSidebar = () => {
  const [active, setActive] = useState([]);
  const handleShowTabs = (tabID) => {
    if (active.some((el) => el === tabID))
      setActive((prev) => prev.filter((el) => el !== tabID));
    else setActive((prev) => [...prev, tabID]);
  };
  return (
    <div className="py-4 bg-white h-full ">
      <div className="flex flex-col justify-center items-center py-2 gap-2">
        <img src={logo} alt="" className="w-[200px] object-contain" />
        <small className=" text-xl font-normal">Admin PetShop</small>
      </div>
      <div className="">
        {adminSidebar.map((item) => (
          <Fragment key={item.id}>
            {item.type === 'SIGNLE' && (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  clsx(isActive && activedStyle, !isActive && notActivedStyle)
                }
              >
                <span>{item.icons}</span>
                <span>{item.text}</span>
              </NavLink>
            )}
            {item.type === 'PARENT' && (
              <div
                onClick={() => handleShowTabs(item.id)}
                className="flex flex-col "
              >
                <div className="px-4 py-2 flex items-center justify-between  hover:bg-gray-600 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>{item.icons}</span>
                    <span>{item.text}</span>
                  </div>
                  {active.some((id) => id === item.id) ? (
                    <AiOutlineCaretRight />
                  ) : (
                    <AiOutlineCaretDown />
                  )}
                </div>
                {active.some((id) => id === item.id) && (
                  <div className="flex flex-col ">
                    {item.submenu.map((item1) => (
                      <NavLink
                        key={item.text}
                        to={item1.path}
                        onClick={(e) => e.stopPropagation()}
                        className={({ isActive }) =>
                          clsx(
                            isActive && activedStyle,
                            !isActive && notActivedStyle,
                            'pl-10'
                          )
                        }
                      >
                        {item1.text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
