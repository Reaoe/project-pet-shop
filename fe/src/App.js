import './App.css';
import {
  AdminLayout,
  CreateCategory,
  CreateProduct,
  Dashboard,
  ManageOrder,
  ManageProduct,
  ManageUser,
} from './page/admin';
import {
  Login,
  Register,
  Public,
  Home,
  Contact,
  Cart,
  Product,
  Services,
  Details,
  Profile,
} from './page/public';
import path from './ultils/path';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.CONTACT} element={<Contact />} />
            <Route path={path.PRODUCT} element={<Product />} />
            <Route path={path.SERVICES} element={<Services />} />
            <Route path={path.DETAIL} element={<Details />} />
            <Route path={path.PROFILE} element={<Profile />} />
          </Route>

          <Route path={path.ADMIN} element={<AdminLayout />}>
            <Route path={path.DASHBOARD} element={<Dashboard />} />
            <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
            <Route path={path.MANAGE_PRODUCT} element={<ManageProduct />} />
            <Route path={path.MANAGE_USER} element={<ManageUser />} />
            <Route path={path.CREATE_PRODUCT} element={<CreateProduct />} />
            <Route path={path.CREATE_CATEGORY} element={<CreateCategory />} />
          </Route>

          <Route path={path.CART} element={<Cart />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
