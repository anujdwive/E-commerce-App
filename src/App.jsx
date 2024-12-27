import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPages from "./pages/cart/CartPages";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/MyState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./components/protectedRoutes/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./components/protectedRoutes/ProtectedRouteForAdmin";

const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPages />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" 
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            } 
            />
            <Route path="/admin-dashboard" 
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            } 
            />
            <Route path="/addproduct" 
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            } 
            />
            <Route path="/updateproduct" 
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            } 
            />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  )
}

export default App
