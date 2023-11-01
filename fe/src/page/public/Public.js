import React from 'react';
import { Header, Footer } from '../../component';
import { Outlet } from 'react-router-dom';

const Public = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Public;
