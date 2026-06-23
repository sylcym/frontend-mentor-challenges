import PropTypes from 'prop-types'
import '../styles/ProductCard.css'
// import addToCartIcon from '../assets/images/icon-add-to-cart.svg'

function ProductCard({
  name,
  category,
  price,
  image,
  addToCart,
  quantity,
  removeItem,
}) {

  return (
    <div className="product-card">
      <div className="product-image-wrapper">

        <picture>

          <source
            media="(min-width: 1024px)"
            srcSet={image.desktop}
          />

          <source
            media="(min-width: 768px)"
            srcSet={image.tablet}
          />

          <img
            src={image.mobile}
            alt={name}
            className={
              quantity > 0
                ? 'product-image active'
                : 'product-image'
            }
          />

        </picture>

        {quantity === 0 ? (

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart({
              name,
              price,
              thumbnail: image.thumbnail,
            })}
          >
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt=""
              className="cart-icon"
            />

            Add to Cart
          </button>

        ) : (

          <div className="quantity-controls">

            <button
              className="quantity-btn"
              onClick={() => removeItem(name)}
            >
              -
            </button>

            <p className="quantity-value">
              {quantity}
            </p>

            <button
              className="quantity-btn"
              onClick={() => addToCart({
                name,
                price,
                thumbnail: image.thumbnail,
              })}
            >
              +
            </button>

          </div>

        )}

      </div>
      <p className="product-category">
        {category}
      </p>
      <h2 className="product-name">
        {name}
      </h2>

      <p className="product-price">
        ${price.toFixed(2)}
      </p>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  // image: PropTypes.string,
  image: PropTypes.object,
  category: PropTypes.string,
  addToCart: PropTypes.func,
  quantity: PropTypes.number,
  removeItem: PropTypes.func,
}

export default ProductCard