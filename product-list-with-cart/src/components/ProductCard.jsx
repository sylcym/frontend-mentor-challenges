import PropTypes from 'prop-types'
import '../styles/ProductCard.css'

function ProductCard({ name, price }) {

  return (
    <div className="product-card">
      <h2 className="product-name">
        {name}
      </h2>

      <p className="product-price">
        ${price}
      </p>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
}

export default ProductCard