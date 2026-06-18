import PropTypes from 'prop-types'
import '../styles/ProductCard.css'

function ProductCard({
  name,
  category,
  price,
  image,
  addToCart,
}) {

  return (
    <div className="product-card">
      <div className="product-image-wrapper">

        <img
          src={image}
          alt={name}
          className="product-image"
        />

        <button className="add-to-cart-btn"
          onClick={() => addToCart({
            name,
            price,
          })}
        >
          Add to Cart
        </button>

      </div>
      <p className="product-category">
        {category}
      </p>
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
  image: PropTypes.string,
  category: PropTypes.string,
  addToCart: PropTypes.func,
}

export default ProductCard