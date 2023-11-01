import React, { useEffect, useState, useContext } from 'react';
import { QuantityContext } from '../../Context/QuantityContext';
import { Sidebar } from '../../component';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import icons from '../../ultils/icons';
const { AiFillPlusCircle, AiFillMinusCircle } = icons;

const Details = () => {
  const context = useContext(QuantityContext);
  console.log(context.idProduct);

  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const handleMimus = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleAdd = () => {
    setTotal(quantity + total);
    setQuantity(1);
    const productCart = {};
    productCart['id'] = params.id;
    productCart['quantity'] = quantity;
    console.log(productCart);
    var newProductCart = {};
    var updateProductCart = localStorage.getItem('productcart');
    if (updateProductCart) {
      newProductCart = JSON.parse(updateProductCart);
    }
    newProductCart[params.id] = productCart;
    localStorage.setItem('productcart', JSON.stringify(newProductCart));

    // localStorage.setItem('idProduct', JSON.stringify(params.id));
    // localStorage.setItem('quantity', JSON.stringify(quantity));
    // localStorage.removeItem('idProduct');
    // localStorage.removeItem('productcart');
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/product/${params.id}`)
      .then((res) => {
        setData(res.data.data.getOneProduct);
        console.log(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-[92%] mx-auto flex pt-6">
      <div className="w-1/3">
        <Sidebar />
      </div>

      <div className="w-full flex gap-6">
        <img
          src={data.image}
          alt=""
          className="object-cover h-[409px] w-[345px] rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <h1 className="font-black text-3xl">{data.productName}</h1>
          <div className="flex">
            <p className="text-blue-500 text-xl font-bold">{data.price}</p>
            <span className="text-blue-500">đ</span>
          </div>
          <p>{data.description}</p>
          <div className="flex justify-start gap-4">
            <p className="pr-6">Số Lượng:</p>
            <button className="text-xl" onClick={handleMimus}>
              <AiFillMinusCircle />
            </button>
            <span>{quantity}</span>
            <button className="text-xl" onClick={handlePlus}>
              <AiFillPlusCircle />
            </button>
            <div></div>
          </div>
          <button
            onClick={handleAdd}
            className="w-[184px] bg-while px-4 py-2 rounded-xl border-dashed border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
