import React, { useContext, useEffect, useState } from 'react';
import { Sidebar } from '../../component';

import axios from 'axios';
import path from '../../ultils/path';
import { Link } from 'react-router-dom';
import CartLoading from './CartLoading';
import { QuantityContext } from '../../Context/QuantityContext';
const Product = () => {
  const context = useContext(QuantityContext);
  console.log(context.idProduct);

  const [Loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/product')
      .then((response) => {
        setDataProduct(response.data.data.getAllProduct);
        console.log(response.data.data.getAllProduct);
      })
      .catch((error) => console.log(error));
  }, [context.idProduct]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3 * 1000);
  });

  return (
    <div className="w-[92%] mx-auto flex flex-row">
      <div className="w-1/3 border-2">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-y-6 px-4 py-8">
          {!Loading &&
            dataProduct.map((item) => {
              if (context.idProduct === '' && context.idParent === '') {
                return (
                  <Link to={`/${path.PRODUCT}/${item._id}`}>
                    <div className=" rounded-3xl flex flex-col justify-start mx-4 ">
                      <img
                        src={item.image}
                        alt=""
                        key={item._id}
                        className="object-cover w-full h-[380px] rounded-3xl"
                      />
                      <div>
                        <h1 className="text-xl font-bold my-6">
                          {item.productName}
                        </h1>

                        <p className="text-blue-500 text-xl">
                          {item.price}
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
              if (
                context.idParent !== '' &&
                context.idParent === item.category.parent
              ) {
                return (
                  <Link to={`/${path.PRODUCT}/${item._id}`}>
                    <div className=" rounded-3xl flex flex-col justify-start mx-4 ">
                      <img
                        src={item.image}
                        alt=""
                        key={item._id}
                        className="object-cover w-full h-[380px] rounded-3xl"
                      />
                      <div>
                        <h1 className="text-xl font-bold my-6">
                          {item.productName}
                        </h1>

                        <p className="text-blue-500 text-xl">
                          {item.price}
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
              if (
                context.idProduct !== '' &&
                context.idProduct === item.category._id
              ) {
                return (
                  <Link to={`/${path.PRODUCT}/${item._id}`}>
                    <div className=" rounded-3xl flex flex-col justify-start mx-4 ">
                      <img
                        src={item.image}
                        alt=""
                        key={item._id}
                        className="object-cover w-full h-[380px] rounded-3xl"
                      />
                      <div>
                        <h1 className="text-xl font-bold my-6">
                          {item.productName}
                        </h1>

                        <p className="text-blue-500 text-xl">
                          {item.price}
                          <span>đ</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          {Loading &&
            Array(6)
              .fill(0)
              .map((item, index) => (
                <CartLoading.Loading key={index}></CartLoading.Loading>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
