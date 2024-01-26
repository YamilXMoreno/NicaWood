export const Orders = [
    {
      _id: 1,
      shippingInfo: {
        address: '5 cuadras al lago',
        city: 'Managua',
        country: 'Nicaragua',
        pinCode: '12001',
      },
      createdAt: '12/1/2023T00:00:00',
      orderStatus: 'Processing',
      paymentMethod: 'Cash on Deliver',
      totalAmount: 2399,
    },
    {
      _id: 2,
      shippingInfo: {
        address: 'De Keiser University San Marcos, camine recto hasta llegar a la Pizza To Go, gire a la derecha y camine hasta el lugar llamado Aparicios Bar',
        city: 'Carazo',
        country: 'Nicaragua',
        pinCode: '11001',
      },
      createdAt: '12/1/2023T00:00:00',
      orderStatus: 'Canceled',
      paymentMethod: 'Payment Online',
      totalAmount: 5999,
    },
  ];