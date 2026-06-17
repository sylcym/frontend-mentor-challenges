import { useState } from 'react'
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import '../styles/ProductsPage.css'
import emptyCartImage from '../assets/images/illustration-empty-cart.svg'

function ProductsPage() {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  function addToCart(productName) {

    setCartCount(cartCount + 1)

    const existingItem = cartItems.find(
      (item) => item.name === productName
    )

    if (existingItem) {

      const updatedCartItems = cartItems.map((item) => {

        if (item.name === productName) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item

      })

      setCartItems(updatedCartItems)

    } else {

      setCartItems([
        ...cartItems,
        {
          name: productName,
          quantity: 1,
        },
      ])

    }

  }

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
            addToCart={addToCart}
          />
        ))}
      </div>

      <aside className="cart-container">
        <h2 className="cart-title">
          Your Cart ({cartCount})
        </h2>

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <img
              src={emptyCartImage}
              alt="Empty cart"
              className="empty-cart-image"
            />

            <p className="empty-cart-text">
              Your added items will appear here
            </p>

          </div>

        ) : (

          <div className="cart-items">

            {cartItems.map((item, index) => (

              <p key={index}>
                {item.name} x{item.quantity}
              </p>

            ))}

          </div>

        )}
      </aside>

    </main>
  )
}

export default ProductsPage