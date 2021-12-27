import Product from "./Product";

const Products = ({ products, onAddToCart}) => {
  return (
    <>
      <div className="container mx-auto py-6">
        <div className="grid gap-6 grid-cols-3">
          { products.map((product) => (
            <Product product={product} key={product.id} onAddToCart={onAddToCart}/>
          ))}
          
        </div>
      </div>
    </>
  )
}

export default Products
