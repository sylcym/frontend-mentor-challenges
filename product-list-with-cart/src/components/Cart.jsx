import PropTypes from 'prop-types'
import CartItem from './CartItem'
import '../styles/Cart.css'

function Cart({
  cartItems,
  cartCount,
  orderTotal,
  removeItem,
  emptyCartImage,
}) {

  return (
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
              price={item.price}
              removeItem={removeItem}
            />

          ))}

        </div>

      )}

    </aside>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  cartCount: PropTypes.number,
  orderTotal: PropTypes.number,
  removeItem: PropTypes.func,
  emptyCartImage: PropTypes.string,
}

export default Cart