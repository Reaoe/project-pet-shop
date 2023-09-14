import './App.css';
import {
  Login,
  Register,
  Public,
  Home,
  Contact,
  Cart,
  Product,
  Services,
} from './page/public';
import path from './ultils/path';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.PRODUCT} element={<Product />} />
          <Route path={path.SERVICES} element={<Services />} />
        </Route>
        <Route path={path.CART} element={<Cart />} />

        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
