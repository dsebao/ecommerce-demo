import CartItem from "./CartItem";

const Cart = ({classPanel, cart, onEmptyCart}) => {
  const cartStatus = cart.total_unique_items > 0 ? true: false;

  return (
    <div className={`absolute ${classPanel} right-0 mt-2 p-4 w-96 bg-white rounded-md shadow-xl z-20`}>
      <h3 className='text-lg text-bold text-purple-900'>Your shopping Cart</h3>
      <hr className="mt-2" />

      { !cartStatus &&
        <p className="cart__none text-md my-4">
          You have no items in your shopping cart, start adding some!
        </p>
      }

      {cart.total_items > 0 && 
        cart.line_items.map((product) => (
          <CartItem key={product.id} product={ product }/>
        ))
      }

      {cartStatus && 
        <>
          <hr className="mb-3"/>
          <div className="cart__total">
            <p className="cart__total-title">Subtotal:</p>
            <p className="cart__total-price font-bold">{cart.subtotal.formatted_with_symbol}</p>
          </div>
          <div className="flex justify-between">
            <button onClick={onEmptyCart} className="mt-2 mr-2 border border-1 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white py-2 px-5 rounded-md p-3">Empty cart</button>
            <button className="mt-2 bg-yellow-400 text-gray-900 hover:bg-yellow-400 py-2 px-5 rounded-md p-3">Checkout</button>
          </div>
        </>
      }
    </div>
  )
}

export default Cart
