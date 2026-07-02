import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/InvoiceForm.css'

function InvoiceForm({ setShowInvoiceForm }) {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    postCode: '',
    country: '',
    clientName: '',
    clientEmail: '',
    clientStreet: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',
    invoiceDate: '',
    paymentTerms: '30',
    projectDescription: '',
    items: [
      {
        name: '',
        quantity: 1,
        price: 0,
      },
    ],
  })

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  function handleItemChange(index, e) {
    const { name, value } = e.target

    const updatedItems = [...formData.items]

    updatedItems[index][name] = value

    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }))
  }

  function addNewItem() {
    const newItem = {
      name: '',
      quantity: 1,
      price: 0,
    }

    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }))
  }

  function removeItem(indexToRemove) {
    const updatedItems = formData.items.filter(
      (_, index) => index !== indexToRemove
    )

    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }))
  }


  return (
    <>
      <div
        className="overlay"
        onClick={() => setShowInvoiceForm(false)}
      ></div>

      <aside className="invoice-form">
        <button
          className="close-button"
          onClick={() => setShowInvoiceForm(false)}
        >
          Close
        </button>

        <h2 className="form-title">
          New Invoice
        </h2>

        <form className="invoice-form-content">
          <section className="form-section">
            <h3 className="section-title">
              Bill From
            </h3>

            <div className="form-group">
              <label className="form-label">
                Street Address
              </label>

              <input
                className="form-input"
                type="text"
                name="street"
                placeholder="Street Address"
                value={formData.street}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  City
                </label>

                <input
                  className="form-input"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Post Code
                </label>

                <input
                  className="form-input"
                  type="text"
                  name="postCode"
                  placeholder="Post Code"
                  value={formData.postCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Country
              </label>

              <input
                className="form-input"
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="form-section">
            <h3 className="section-title">
              Bill To
            </h3>

            <div className="form-group">
              <label className="form-label">
                Client Name
              </label>

              <input
                className="form-input"
                type="text"
                name="clientName"
                placeholder="Client Name"
                value={formData.clientName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Client Email
              </label>

              <input
                className="form-input"
                type="email"
                name="clientEmail"
                placeholder="Client Email"
                value={formData.clientEmail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Street Address
              </label>

              <input
                className="form-input"
                type="text"
                name="clientStreet"
                placeholder="Street Address"
                value={formData.clientStreet}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  City
                </label>

                <input
                  className="form-input"
                  type="text"
                  name="clientCity"
                  placeholder="City"
                  value={formData.clientCity}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Post Code
                </label>

                <input
                  className="form-input"
                  type="text"
                  name="clientPostCode"
                  placeholder="Post Code"
                  value={formData.clientPostCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Country
              </label>

              <input
                className="form-input"
                type="text"
                name="clientCountry"
                placeholder="Country"
                value={formData.clientCountry}
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="form-section">
            <div className="form-group">
              <label className="form-label">
                Invoice Date
              </label>

              <input
                className="form-input"
                type="date"
                name="invoiceDate"
                value={formData.invoiceDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Payment Terms
              </label>

              <select
                className="form-input"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleChange}
              >
                <option value="1">
                  Net 1 Day
                </option>

                <option value="7">
                  Net 7 Days
                </option>

                <option value="14">
                  Net 14 Days
                </option>

                <option value="30">
                  Net 30 Days
                </option>
              </select>
            </div>
          </section>

          <section className="form-section">
            <div className="form-group">
              <label className="form-label">
                Project Description
              </label>

              <input
                className="form-input"
                type="text"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="e.g. Graphic Design Service"
              />
            </div>
          </section>

          <section className="form-section">
            <h3 className="items-title">
              Item List
            </h3>

            {formData.items.map((item, index) => (
              <div
                className="item-row"
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
                    <label className="form-label">
                      Delete
                    </label>

                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => removeItem(index)}
                    >
                      X
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
          </section>
        </form>
      </aside>
    </>
  )
}

InvoiceForm.propTypes = {
  setShowInvoiceForm: PropTypes.func,
}

export default InvoiceForm