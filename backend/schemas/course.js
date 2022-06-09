export default {
    name: 'course',
    title: 'Course',
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
            name: 'primaryText',
            title: 'Primary Text',
            type: 'string'
        },
        {
            name: 'secondaryText',
            title: 'Secondary Text',
            type: 'string'
        },
        {
            name: 'color',
            title: 'Color',
            type: 'color',
            options: {
                disableAlpha: true
            }
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}