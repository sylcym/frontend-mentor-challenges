import products from "../data/products"
import ProductCard from "../components/ProductCard"
import '../styles/ProductsPage.css'

function ProductsPage() {
  console.log(products)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default ProductsPage