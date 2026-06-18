import { useState } from 'react'
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import CartItem from '../components/CartItem'
import '../styles/ProductsPage.css'
import emptyCartImage from '../assets/images/illustration-empty-cart.svg'

function ProductsPage() {
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  function addToCart(product) {

    const existingItem = cartItems.find(
      (item) => item.name === product.name
    )

    if (existingItem) {

      const updatedCartItems = cartItems.map((item) => {

        if (item.name === product.name) {
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
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ])

    }

  }

  function removeItem(productName) {

    const existingItem = cartItems.find(
      (item) => item.name === productName
    )

    if (existingItem.quantity === 1) {

      const filteredItems = cartItems.filter(
        (item) => item.name !== productName
      )

      setCartItems(filteredItems)

    } else {

      const updatedCartItems = cartItems.map((item) => {

        if (item.name === productName) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }

        return item

      })

      setCartItems(updatedCartItems)

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

            <div className="order-total">

              <p>Order Total</p>

              <h3>
                ${orderTotal.toFixed(2)}
              </h3>

            </div>

            {cartItems.map((item, index) => (

              <CartItem
                key={index}
                name={item.name}
                quantity={item.quantity}
                removeItem={removeItem}
                price={item.price}
              />

            ))}

          </div>


        )}
      </aside>

    </main>
  )
}

export default ProductsPage