import { useState } from 'react'
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import Cart from '../components/Cart'
import OrderModal from '../components/OrderModal'
import '../styles/ProductsPage.css'
import emptyCartImage from '../assets/images/illustration-empty-cart.svg'

function ProductsPage() {
  const [cartItems, setCartItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          thumbnail: product.thumbnail,
          quantity: 1,
        }
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
        {products.map((product) => {

          const cartItem = cartItems.find(
            (item) => item.name === product.name
          )

          return (
            <ProductCard
              quantity={cartItem ? cartItem.quantity : 0}
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
              removeItem={removeItem}

            />
          )
        })}
      </div>

      <Cart
        cartItems={cartItems}
        cartCount={cartCount}
        orderTotal={orderTotal}
        removeItem={removeItem}
        emptyCartImage={emptyCartImage}
        setIsModalOpen={setIsModalOpen}
      />
      <OrderModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCartItems={setCartItems}
        cartItems={cartItems}
        orderTotal={orderTotal}
      />

    </main>
  )
}

export default ProductsPage