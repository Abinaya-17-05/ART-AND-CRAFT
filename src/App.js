import "App.css";
import { Navbar, Footer, Aside } from "component";
import { Home, Product, Wishlist, Cart, Pagenotfound } from "pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
