import { useEffect } from 'react'
import PropTypes from 'prop-types'
import '../styles/OrderModal.css'

function OrderModal({
  isModalOpen,
  setIsModalOpen,
  setCartItems,
  cartItems,
  orderTotal,
}) {

  useEffect(() => {

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }

  }, [isModalOpen])

  if (!isModalOpen) {
    return null
  }

  function startNewOrder() {

    setCartItems([])

    setIsModalOpen(false)

  }

  return (
    <div className="modal-overlay">

      <div
        className="modal"
        role="dialog"
        aria-modal="true"
      >

        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt=""
          aria-hidden="true"
          className="confirmed-icon"
        />

        <h2 className="modal-title">
          Order Confirmed
        </h2>

        <p className="modal-description">
          We hope you enjoy your food!
        </p>

        <div className="modal-items">

          {cartItems.map((item) => (

            <div
              key={item.name}
              className="modal-item"
            >

              <img
                src={item.thumbnail}
                alt=""
                aria-hidden="true"
                className="modal-thumbnail"
              />

              <div>

                <h3 className="modal-item-name">
                  {item.name}
                </h3>

                <p className="modal-item-details">
                  {item.quantity}x @ ${item.price.toFixed(2)}
                </p>

              </div>

              <p className="modal-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

            </div>

          ))}

          <div className="modal-order-total">

            <p className="modal-order-total-text">
              Order Total
            </p>

            <h2 className="modal-order-total-price">
              ${orderTotal.toFixed(2)}
            </h2>

          </div>

        </div>

        <button
          type="button"
          className="start-new-order-btn"
          onClick={startNewOrder}
        >
          Start New Order
        </button>

      </div>

    </div>
  )
}

OrderModal.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  setCartItems: PropTypes.func,
  cartItems: PropTypes.array,
  orderTotal: PropTypes.number,
}

export default OrderModal