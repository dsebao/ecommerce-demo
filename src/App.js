import {useState, useEffect} from 'react';
import Products from "./components/Products";
import {commerce} from './lib/commerce';
import Navbar from './components/Navbar';

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

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navbar cart={cart} totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App
