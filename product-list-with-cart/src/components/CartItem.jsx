import PropTypes from 'prop-types'
import '../styles/CartItem.css'

function CartItem({
  name,
  quantity,
  removeItem,
  price,
}) {

  return (
    <div className="cart-item">

      <div className="cart-item-info">

        <h3 className="cart-item-name">
          {name}
        </h3>

        <div className="cart-item-details">

          <p className="cart-item-quantity">
            {quantity}x
          </p>

          <p className="cart-item-price">
            @ ${price.toFixed(2)}
          </p>

          <p className="cart-item-total">
            ${(price * quantity).toFixed(2)}
          </p>

        </div>

      </div>

      <button
        type="button"
        className="remove-item-btn"
        onClick={() => removeItem(name)}
      >
        x
      </button>

    </div>
  )
}

CartItem.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  removeItem: PropTypes.func,
  price: PropTypes.number,
}

export default CartItem