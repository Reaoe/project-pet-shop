import React from 'react';
import { MdAddShoppingCart} from "react-icons/md";

const CreateCategory = () => {
  return (
    <div className="w-full">
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold p-4 border-b">
        <span>Create New Category</span>
        <MdAddShoppingCart/>
      </h1>
    </div>
  );
};

export default CreateCategory;
