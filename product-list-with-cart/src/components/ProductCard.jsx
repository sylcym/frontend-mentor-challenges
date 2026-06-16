import PropTypes from 'prop-types'
import '../styles/ProductCard.css'

function ProductCard({ name, price, image }) {

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
      />
      <h2 className="product-name">
        {name}
      </h2>

      <p className="product-price">
        ${price}
      </p>
      <button className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}

export default ProductCard