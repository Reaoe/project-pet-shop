import React from 'react';
import { LoadingSkeleton } from '../../component';

const CartLoading = () => {
  return (
    <div className="gap-y-6 px-4 py-8 ">
      <div className="w-[300px] border-2 rounded-3xl flex flex-col justify-start mx-4">
        <LoadingSkeleton className=" h-[380px] rounded-3xl"></LoadingSkeleton>
        <div className="pb-8">
          <h1 className="text-2xl font-bold mt-6">
            <LoadingSkeleton className="w-full"></LoadingSkeleton>
          </h1>
          <p className="text-blue-500 text-xl">
            <LoadingSkeleton className="w-full"></LoadingSkeleton>
          </p>
        </div>
      </div>
    </div>
  );
};

CartLoading.Loading = CartLoading;

export default CartLoading;
