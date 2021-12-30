import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import AddressForm from "./CheckoutForm/AddressForm";
import PaymentForm from "./CheckoutForm/PaymentForm";

import { commerce } from "../lib/commerce";

const Checkout = ({cart}) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const cartStatus = cart.total_unique_items > 0 ? true: false;

  useEffect(() => {
    const generateToken = async () => {
      try {
        if(cart.id) {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);
        }
      } catch(error) {
        console.log(error);
      }
    }

    generateToken();
  },[cartStatus])

  const Confirmation = () => {
    <div>
      Confirmation
    </div>
  }

  return (
    <div className="py-6 max-w-md mx-auto">
      <h1 className="text-purple-800 text-center text-3xl mb-8">Checkout</h1>

      { !cartStatus &&
        <p className="cart__none text-md my-4">
          You have no items in your shopping cart, start adding some!
        </p>
      }

      {cartStatus && 
        <div>
            { checkoutToken && checkoutToken.live.line_items.map((product) => (
              <CartItem key={product.id} product={ product }/>
            )) }

          <hr className="mb-3"/>

          <div className="cart__total">
            <p className="cart__total-title">Subtotal:</p>
            <p className="cart__total-price font-bold text-xl">{cart.subtotal.formatted_with_symbol}</p>
          </div>
          
          <AddressForm/>

          <PaymentForm checkoutToken={checkoutToken}/>

        </div>
      }
    </div>
  )
}

export default Checkout
