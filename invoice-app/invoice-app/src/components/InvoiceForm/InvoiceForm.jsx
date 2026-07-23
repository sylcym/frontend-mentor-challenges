import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BillFromSection from './BillFromSection'
import BillToSection from './BillToSection'
import ItemsSection from './ItemsSection'
import InvoiceDetailsSection from './InvoiceDetailsSection'
// import '../styles/InvoiceForm.css'

import '../../styles/InvoiceForm.css'

const initialFormData = {
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
}

function InvoiceForm({
  setShowInvoiceForm,
  setInvoiceList,
  invoiceToEdit,
  setInvoiceToEdit,
}) {

  const [formData, setFormData] =
    useState(initialFormData)

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!invoiceToEdit) {
      return
    }

    setFormData({
      street: invoiceToEdit.senderAddress.street,
      city: invoiceToEdit.senderAddress.city,
      postCode: invoiceToEdit.senderAddress.postCode,
      country: invoiceToEdit.senderAddress.country,

      clientName: invoiceToEdit.client,
      clientEmail: invoiceToEdit.clientAddress.email,
      clientStreet: invoiceToEdit.clientAddress.street,
      clientCity: invoiceToEdit.clientAddress.city,
      clientPostCode: invoiceToEdit.clientAddress.postCode,
      clientCountry: invoiceToEdit.clientAddress.country,

      invoiceDate: invoiceToEdit.dueDate,
      paymentTerms: '30',

      projectDescription: invoiceToEdit.projectDescription,

      items: invoiceToEdit.items,
    })
  }, [invoiceToEdit])

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
    setFormData(initialFormData)

    setErrors({})
  }

  function validateForm() {
    const newErrors = {}

    if (!formData.clientName.trim()) {
      newErrors.clientName =
        'Client name is required'
    }

    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = 'Client email is required'
    }

    if (!formData.invoiceDate) {
      newErrors.invoiceDate = 'Invoice date is required'
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription =
        'Project description is required'
    }

    if (formData.items.length === 0) {
      newErrors.items = 'At least one item is required'
    } else {
      const hasEmptyItemName = formData.items.some(
        (item) => !item.name.trim()
      )

      if (hasEmptyItemName) {
        newErrors.items = 'Every item must have a name'
      }
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // function isFormEmpty() {
  //   return (
  //     !formData.clientName.trim() &&
  //     !formData.clientEmail.trim() &&
  //     !formData.invoiceDate &&
  //     formData.items.length === 1 &&
  //     !formData.items[0].name.trim()
  //   )
  // }

  function handleSubmit(e) {
    e.preventDefault()
    const isValid = validateForm()

    if (!isValid) {
      return
    }

    const newInvoice = {
      id: crypto.randomUUID().slice(0, 6),

      client: formData.clientName,

      projectDescription: formData.projectDescription,

      dueDate: formData.invoiceDate,

      senderAddress: {
        street: formData.street,
        city: formData.city,
        postCode: formData.postCode,
        country: formData.country,
      },

      clientAddress: {
        email: formData.clientEmail,
        street: formData.clientStreet,
        city: formData.clientCity,
        postCode: formData.clientPostCode,
        country: formData.clientCountry,
      },

      items: formData.items,

      total: formData.items.reduce(
        (acc, item) =>
          acc + item.quantity * item.price,
        0
      ),

      status: 'Pending',
    }


    if (invoiceToEdit) {

      setInvoiceList((prev) => {
        const updated = prev.map((invoice) =>
          invoice.id === invoiceToEdit.id
            ? {
              ...newInvoice,
              id: invoice.id,
              status: invoice.status,
            }
            : invoice
        )

        return updated
      })

    } else {

      setInvoiceList((prev) => [
        newInvoice,
        ...prev,
      ])

    }


    setShowInvoiceForm(false)
    setInvoiceToEdit(null)
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
          {invoiceToEdit
            ? `Edit #${invoiceToEdit.id}`
            : 'New Invoice'}
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

          <InvoiceDetailsSection
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />

          <ItemsSection
            formData={formData}
            handleItemChange={handleItemChange}
            addNewItem={addNewItem}
            removeItem={removeItem}
            errors={errors}
          />

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
              // disabled={isFormEmpty()}
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
  setShowInvoiceForm: PropTypes.func.isRequired,
  setInvoiceList: PropTypes.func.isRequired,
  setInvoiceToEdit: PropTypes.func.isRequired,

  invoiceToEdit: PropTypes.shape({
    id: PropTypes.string,
    client: PropTypes.string,
    projectDescription: PropTypes.string,
    dueDate: PropTypes.string,

    senderAddress: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      postCode: PropTypes.string,
      country: PropTypes.string,
    }),

    clientAddress: PropTypes.shape({
      email: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      postCode: PropTypes.string,
      country: PropTypes.string,
    }),

    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
      })
    ),
  }),
}

export default InvoiceForm