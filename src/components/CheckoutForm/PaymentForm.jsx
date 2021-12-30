import {Elements, PaymentElement, ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PaymentForm = ({checkoutToken}) => {
  return (
    <div>
      <hr className="mt-5"/>
      <h3 className="text-xl my-5">Pay for this stuff</h3>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({elements, stripe}) => (
            <form>
              <CardElement />
              <br></br>
              <div>
              <button type="submit" className="mt-2 bg-purple-900 text-white hover:bg-purple-800 py-2 px-5 rounded-md p-3" disabled={!stripe}>
                Pay
              </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  )
}

export default PaymentForm
