import { useState } from 'react'
import PropTypes from 'prop-types'
import BillFromSection from './BillFromSection'
import BillToSection from './BillToSection'
// import '../styles/InvoiceForm.css'
import '../../styles/InvoiceForm.css'

function InvoiceForm({
  setShowInvoiceForm,
  setInvoiceList,
}) {
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

  const [errors, setErrors] = useState({})

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

  function resetForm() {
    setFormData({
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

    setErrors({})
  }

  function validateForm() {
    const newErrors = {}

    if (!formData.clientName.trim()) {
      newErrors.clientName =
        'Client name is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  function isFormEmpty() {
    return (
      !formData.clientName.trim() &&
      !formData.clientEmail.trim() &&
      !formData.invoiceDate &&
      formData.items.length === 1 &&
      !formData.items[0].name.trim()
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    const isValid = validateForm()

    if (!isValid) {
      return
    }


    const newInvoice = {
      id: crypto.randomUUID().slice(0, 6),

      client: formData.clientName,

      dueDate: formData.invoiceDate,

      total: formData.items.reduce(
        (acc, item) =>
          acc + item.quantity * item.price,
        0
      ),

      status: 'pending',
    }

    setInvoiceList((prev) => [
      newInvoice,
      ...prev,
    ])

    setShowInvoiceForm(false)
    resetForm()
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

        <form
          className="invoice-form-content"
          onSubmit={handleSubmit}
        >

          <BillFromSection
            formData={formData}
            handleChange={handleChange}
          />

          <BillToSection
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />

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

          <div className="form-footer">
            <button
              type="button"
              className="discard-button"
              onClick={() => setShowInvoiceForm(false)}
            >
              Discard
            </button>

            <div className="form-footer-right">
              <button
                type="button"
                className="draft-button"
              >
                Save as Draft
              </button>

              <button
                type="submit"
                className="save-button"
                disabled={isFormEmpty()}
              >
                Save & Send
              </button>
            </div>
          </div>
        </form>
      </aside>
    </>
  )
}

InvoiceForm.propTypes = {
  setShowInvoiceForm: PropTypes.func,
  setInvoiceList: PropTypes.func,
}

export default InvoiceForm