import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/MyOrders/Payment/Payment";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products/:id" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="manage-products" element={<ManageProducts />} />
        </Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
