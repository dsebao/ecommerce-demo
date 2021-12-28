import {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from "./components/Products";
import {commerce} from './lib/commerce';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart)
  }

  const handleEmptyCart = async () => {
    const items = await commerce.cart.empty();
    setCart(items.cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Navbar cart={ cart } totalItems={ cart.total_items } onEmptyCart={ handleEmptyCart }/>
        <Routes>
          <Route path="/" element={<Products products={ products } onAddToCart={ handleAddToCart }/>} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
