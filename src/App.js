import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header cart={cart} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home cart={cart} setCart={setCart} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Checkout cart={cart} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/product/:productKey"
          element={
            <>
              <ProductDetails />
            </>
          }
        ></Route>
      </Routes>
      {/* <Routes>
        <Route
          path="/*"
          element={
            <>
              <NotFound />
            </>
          }
        ></Route>
      </Routes> */}
    </div>
  );
}

export default App;
