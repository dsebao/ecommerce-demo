const CartItem = ({product}) => {
  return (
    <div>
      <div className="flex my-3">
        <img className="w-16 h-16 object-contain mr-3 border border-1" src={product.image.url} alt={product.name}/>
        <div className="w-full">
          <h3 className="text-sm font-normal">{ product.name }</h3>
        </div>
        <div className="qty font-bold">
          {product.quantity}
        </div>
      </div>
    </div>
  )
}

export default CartItem
