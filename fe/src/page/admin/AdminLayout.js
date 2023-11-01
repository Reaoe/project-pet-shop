import React from 'react';
import { AdminSidebar } from '../../component';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex w-full bg-gray-100 min-h-screen relative ">
      <div className="w-[327px] top-0 bottom-0 flex-none fixed">
        <AdminSidebar />
      </div>
      <div className="w-[418px]"></div>
      <div className="flex-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminLayout;
