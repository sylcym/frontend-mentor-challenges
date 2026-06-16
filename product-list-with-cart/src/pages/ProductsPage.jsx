import products from "../data/products"
import ProductCard from "../components/ProductCard"
import '../styles/ProductsPage.css'
import emptyCartImage from '../assets/images/illustration-empty-cart.svg'

function ProductsPage() {
  console.log(products)
  return (
    <main className="products-page">

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <aside className="cart-container">
        <h2 className="cart-title">
          Your Cart (0)
        </h2>

        <div className="empty-cart">

          <img
            // src="/src/assets/images/illustration-empty-cart.svg"
            src={emptyCartImage}
            alt="Empty cart"
            className="empty-cart-image"
          />

          <p className="empty-cart-text">
            Your added items will appear here
          </p>

        </div>
      </aside>

    </main>
  )
}

export default ProductsPage