// Products Schema
export const products =  {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).error('A product name is required.')
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().min(0).error('Price must be a positive number.')
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: Rule => Rule.required().min(0).error('Stock must be a non-negative number.')
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  };

  //Order Schema
  export const order=  {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).error('Customer name is required.')
      },
      {
        name: 'customerEmail',
        title: 'Customer Email',
        type: 'string',
        validation: Rule => Rule.required().email().error('A valid email is required.')
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'productId', title: 'Product ID', type: 'string' },
              { name: 'quantity', title: 'Quantity', type: 'number', validation: Rule => Rule.min(1) }
            ]
          }
        ]
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: Rule => Rule.required().min(0).error('Total amount must be a positive number.')
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Paid', value: 'paid' },
            { title: 'Failed', value: 'failed' }
          ]
        },
        validation: Rule => Rule.required()
      }
    ]
  };
  // Shipment Schema
  export const Shipment =  {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'shipmentId',
        title: 'Shipment ID',
        type: 'string',
        validation: Rule => Rule.required().error('Shipment ID is required.')
      },
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'string',
        validation: Rule => Rule.required().error('Order ID is required.')
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'In Transit', value: 'in_transit' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'expectedDeliveryDate',
        title: 'Expected Delivery Date',
        type: 'datetime'
      }
    ]
  };
  // Payment Schema
  export const Payment =  {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      {
        name: 'paymentId',
        title: 'Payment ID',
        type: 'string',
        validation: Rule => Rule.required().error('Payment ID is required.')
      },
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'string',
        validation: Rule => Rule.required().error('Order ID is required.')
      },
      {
        name: 'customerId',
        title: 'Customer ID',
        type: 'string',
        validation: Rule => Rule.required().error('Customer ID is required.')
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        validation: Rule => Rule.required().min(0).error('Amount must be a positive number.')
      },
      {
        name: 'currency',
        title: 'Currency',
        type: 'string',
        validation: Rule => Rule.required().error('Currency is required.')
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: [
            { title: 'Credit Card', value: 'credit_card' },
            { title: 'PayPal', value: 'paypal' },
            { title: 'Bank Transfer', value: 'bank_transfer' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Success', value: 'success' },
            { title: 'Failed', value: 'failed' },
            { title: 'Pending', value: 'pending' }
          ]
        },
        validation: Rule => Rule.required()
      }
    ]
  };
  
  