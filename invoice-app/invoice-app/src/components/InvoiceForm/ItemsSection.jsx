import PropTypes from 'prop-types'
import DeleteIcon from '../../assets/icons/icon-delete.svg'

function ItemsSection({
  formData,
  handleItemChange,
  addNewItem,
  removeItem,
  errors,
}) {
  return (
    <section className="form-section">
      <h3 className="items-title">
        Item List
      </h3>

      {formData.items.map((item, index) => (
        <div
          className="item-row item-row-tablet"
          key={index}
        >
          <div className="form-group">
            <label className="form-label">
              Item Name
            </label>

            <input
              className="form-input"
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => handleItemChange(index, e)}
              placeholder="Banner Design"
            />
          </div>

          <div className="item-grid">
            <div className="form-group">
              <label className="form-label">
                Qty.
              </label>

              <input
                className="form-input"
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="1"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Price
              </label>

              <input
                className="form-input"
                type="number"
                name="price"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="100.00"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Total
              </label>

              <p className="item-total">
                {(item.quantity * item.price).toFixed(2)}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label delete-label">
                Delete
              </label>

              <button
                type="button"
                // className="delete-button"
                className="item-delete-button"
                onClick={() => removeItem(index)}
              >
                <img
                  src={DeleteIcon}
                  alt=""
                  className="delete-icon"
                />
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-item-button"
        onClick={addNewItem}
      >
        + Add New Item
      </button>

      {errors.items && (
        <p className="error-message">
          {errors.items}
        </p>
      )}
    </section>
  )
}

ItemsSection.propTypes = {
  formData: PropTypes.object,
  handleItemChange: PropTypes.func,
  addNewItem: PropTypes.func,
  removeItem: PropTypes.func,
  errors: PropTypes.object,
}

export default ItemsSection