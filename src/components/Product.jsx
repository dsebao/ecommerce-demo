const Product = ({product, onAddToCart}) => {


  return (
    <div className="product rounded-lg shadow-md hover:shadow-lg overflow-hidden">
      <img className="w-full object-cover aspect-video" src={product.image.url} title={product.name}/>
      <div className="p-8">
        <h3 className="text-xl font-normal">{ product.name }</h3>
        <div className="price font-extrabold text-lg my-3">{ product.price.formatted_with_symbol}</div>
        <button type="button" onClick={ () => onAddToCart(product.id, 1)} className="bg-yellow-300 text-gray-900 hover:bg-yellow-400 py-2 px-5 rounded-md p-3">Add to cart</button>
      </div>
    </div>
  )
}

export default Product
