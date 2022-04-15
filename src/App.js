import "App.css";
import {
  Navbar,
  Footer,
  Aside,
  ProtectedRoute,
  NonAuthenticatedRoute,
  Modal,
} from "component";
import {
  Home,
  Product,
  Wishlist,
  Cart,
  Pagenotfound,
  Login,
  Signup,
  Profile,
  SingleProduct,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { useCart } from "context/cart-context";
import Mockman from "mockman-js";

function App() {
  const { isModalOpen } = useCart();
  return (
    <>
      <Modal />
      <div
        style={
          isModalOpen
            ? { pointerEvents: "none", opacity: ".6" }
            : { pointerEvents: "auto", opacity: "1" }
        }
      >
        <>
          <Navbar />
          <Aside />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products">
                <Route path="/products" index element={<Product />} />

                <Route path=":productId" element={<SingleProduct />} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

              <Route element={<NonAuthenticatedRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>

              <Route path="/mockman" element={<Mockman />} />
              <Route path="/*" element={<Pagenotfound />} />
            </Routes>
          </main>
          <Footer />
        </>
      </div>
    </>
  );
}

export default App;
