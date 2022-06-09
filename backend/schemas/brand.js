export default {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'imageURL',
            title: 'Image URL',
            type: 'url'
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}