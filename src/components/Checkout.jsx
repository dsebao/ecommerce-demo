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
    <div className="py-6 container mx-auto">
      <h1 className="text-purple-800 text-center text-3xl mb-8">Checkout</h1>

      { !cartStatus &&
        <p className="cart__none text-md my-4 text-center">
          You have no items in your shopping cart, start adding some!
        </p>
      }

      <div className="flex gap-24">
        <div className="w-1/2">
          {cartStatus && 
            <>
              <AddressForm/>
            </>
          }
        </div>
        <div className="w-1/2">
          {cartStatus && 
            <div>
                <h3 className="text-xl my-5">Summary</h3>
                { checkoutToken && checkoutToken.live.line_items.map((product) => (
                  <CartItem key={product.id} product={ product }/>
                )) }

              <div className="cart__total bg-sky-50 p-5 rounded-md border border-1 border-blue-100">
                <p className="cart__total-title">Subtotal:</p>
                <p className="cart__total-price font-bold text-xl">{cart.subtotal.formatted_with_symbol}</p>
              </div>

              <PaymentForm checkoutToken={checkoutToken}/>

            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Checkout
