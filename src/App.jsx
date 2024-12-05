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

const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPages />} />
          <Route path="/allproduct" element={<AllProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
