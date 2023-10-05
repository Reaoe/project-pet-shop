import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuantityContext = createContext({});

const QuantityProvider = ({ children }) => {
  // xử lý tăng giảm

  //product
  const [idParent, setIdParent] = useState('');
  const [MenuParent, setMenuParent] = useState([]);

  const updateid = (id) => {
    setIdProduct('');
    setIdParent(id);

    const fetchData = () => {
      axios
        .get(`http://localhost:8080/api/v1/category/${id}`)
        .then((response) => {
          const child = response.data.data.getOneCategory;
          const updateData = [...MenuParent];
          const categoryIndex = updateData.findIndex((item) => item._id === id);
          // console.log(categoryIndex);
          if (categoryIndex !== -1) {
            updateData[categoryIndex].child = child;
            setMenuParent(updateData);
            // console.log(updateData);
          }
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/category/parent-category')
      .then((response) => {
        setMenuParent(response.data.data.getParentCategory);
        console.log(response.data.data.getParentCategory);
      })
      .catch((error) => console.log(error));
  }, []);
  // side bar ---------------------------------------------

  //menu
  const [idProduct, setIdProduct] = useState('');
  const handleProductId = (id) => {
    setIdParent('');
    // console.log('idIdProduct', id);
    setIdProduct(id);
  };
  // value
  const value = {
    idProduct,
    MenuParent,
    idParent,
    updateid,
    handleProductId,
  };
  return (
    <QuantityContext.Provider value={value}>
      {children}
    </QuantityContext.Provider>
  );
};
export { QuantityContext, QuantityProvider };
