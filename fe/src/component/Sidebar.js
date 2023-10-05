import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { QuantityContext } from '../Context/QuantityContext';

const Sidebar = () => {
  const context = useContext(QuantityContext);

  return (
    <div className="w-full flex flex-col justify-start gap-5">
      <h1 className="font-semibold text-3xl text-blue-500">
        Danh mục sản phẩm
      </h1>
      <div className="flex flex-col gap-2 px-8">
        {context.MenuParent.map((item) => {
          if (item.child && item.child.length > 0) {
            return (
              <div>
                <p
                  onClick={() => context.updateid(item._id)}
                  className="text-base pb-2 hover:cursor-pointer hover:text-cyan-400 focus:text-cyan-400"
                >
                  {item.nameCategory}
                </p>
                {item.child.map((el) => {
                  // console.log(el);
                  return (
                    <div className="pl-3 py-1">
                      <p
                        onClick={() => context.handleProductId(el._id)}
                        className="hover:cursor-pointer"
                      >
                        {el.nameCategory}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return (
              <div>
                <p
                  onClick={() => context.updateid(item._id)}
                  className="text-base pb-2 hover:cursor-pointer hover:text-cyan-400 focus:text-cyan-400"
                >
                  {item.nameCategory}
                </p>
                <p></p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
