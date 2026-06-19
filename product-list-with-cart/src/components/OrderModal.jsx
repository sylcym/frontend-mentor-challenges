import PropTypes from 'prop-types'
import '../styles/OrderModal.css'
import confirmedIcon from '../assets/images/icon-order-confirmed.svg'

function OrderModal({
  isModalOpen,
  setIsModalOpen,
  setCartItems,
  cartItems,
  orderTotal,
}) {

  if (!isModalOpen) {

    return null
  }

  function startNewOrder() {

    setCartItems([])

    setIsModalOpen(false)

  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        <img
          src={confirmedIcon}
          alt=""
          className="confirmed-icon"
        />

        <h2 className="modal-title">
          Order Confirmed
        </h2>

        <p className="modal-description">
          We hope you enjoy your food!
        </p>

        <div className="modal-items">

          {cartItems.map((item, index) => (

            <div
              key={index}
              className="modal-item"
            >

              <img
                src={item.thumbnail}
                alt=""
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

        </div>
        <div className="modal-order-total">

          <p>Order Total</p>

          <h2>
            ${orderTotal.toFixed(2)}
          </h2>

        </div>

        <button
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