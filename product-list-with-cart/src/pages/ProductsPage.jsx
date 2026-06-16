import products from "../data/products"
import ProductCard from "../components/ProductCard"

function ProductsPage() {
  console.log(products)
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductsPage