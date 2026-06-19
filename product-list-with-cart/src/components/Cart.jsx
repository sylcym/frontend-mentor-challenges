import PropTypes from 'prop-types'
import CartItem from './CartItem'
import '../styles/Cart.css'
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg'

function Cart({
  cartItems,
  cartCount,
  orderTotal,
  removeItem,
  emptyCartImage,
  setIsModalOpen,
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

        <>

          <div className="cart-items">


            {cartItems.map((item, index) => (

              <CartItem
                key={index}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                removeItem={removeItem}
              />

            ))}

            <div className="order-total">

              <p>Order Total</p>

              <h3>
                ${orderTotal.toFixed(2)}
              </h3>

            </div>

            <div className="carbon-neutral">

              <img
                src={carbonNeutralIcon}
                alt=""
                className="carbon-neutral-icon"
              />

              <p className="carbon-neutral-text">
                This is a <strong>carbon-neutral</strong> delivery
              </p>

            </div>
          </div>

          <button
            className="confirm-order-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Confirm Order
          </button>

        </>

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
  setIsModalOpen: PropTypes.func,
}

export default Cart