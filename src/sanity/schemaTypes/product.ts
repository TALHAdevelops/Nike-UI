export const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'productName',
          
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'inventory',
        title: 'Inventory',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Using Sanity's image type for image field
        options: {
          hotspot: true,
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required()
      }
    ],
  }