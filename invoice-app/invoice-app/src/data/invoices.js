const invoices = [
  // {
  //   id: 'RT3080',

  //   createdAt: '2021-08-19',

  //   description: 'Re-branding',

  //   paymentTerms: 30,

  //   client: {
  //     name: 'Jensen Huang',
  //     email: 'email@example.com',
  //     street: '10 High Street',
  //     city: 'London',
  //     postCode: 'E1 1AA',
  //     country: 'United Kingdom',
  //   },

  //   sender: {
  //     street: '19 Union Terrace',
  //     city: 'London',
  //     postCode: 'E1 3EZ',
  //     country: 'United Kingdom',
  //   },

  //   dueDate: '19 Aug 2021',

  //   items: [
  //     {
  //       name: 'Banner Design',
  //       quantity: 1,
  //       price: 1800.90,
  //     },
  //   ],

  //   total: 1800.90,

  //   status: 'Paid',
  // },

  {
    id: 'RT3080',

    client: 'Jensen Huang',

    projectDescription: 'Re-branding',

    dueDate: '19 Aug 2021',

    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },

    clientAddress: {
      email: 'jensen@example.com',
      street: '10 High Street',
      city: 'London',
      postCode: 'E1 1AA',
      country: 'United Kingdom',
    },

    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 1800.90,
      },
    ],

    total: 1800.90,

    status: 'Paid',
  },
  {
    id: 'XM9141',

    client: 'Jensen Huang',

    projectDescription: 'Re-branding',

    dueDate: '19 Aug 2021',

    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },

    clientAddress: {
      email: 'jensen@example.com',
      street: '10 High Street',
      city: 'London',
      postCode: 'E1 1AA',
      country: 'United Kingdom',
    },

    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 1800.90,
      },
    ],

    total: 1800.90,

    status: 'Pending',
  }
  // {
  //   id: 'RT3080',
  //   client: 'Jensen Huang',
  //   dueDate: '19 Aug 2021',
  //   total: 1800.90,
  //   status: 'Paid',
  // },

  // {
  //   id: 'XM9141',
  //   client: 'Alex Grim',
  //   dueDate: '20 Aug 2021',
  //   total: 556.00,
  //   status: 'Pending',
  // },

  // {
  //   id: 'RG0314',
  //   client: 'John Morrison',
  //   dueDate: '01 Sep 2021',
  //   total: 14002.33,
  //   status: 'Draft',
  // },
]

export default invoices