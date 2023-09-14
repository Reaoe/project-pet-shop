import React from 'react';
import { Sidebar } from '../../component';

const Services = () => {
  return (
    <div className="w-[92%] mx-auto flex flex-row">
      <div className="w-1/3 border-2">
        <Sidebar />
      </div>
      <div className="w-full border-2 border-red-400">Services</div>
    </div>
  );
};

export default Services;
