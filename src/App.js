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
          <Route index element={<MyOrders />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
