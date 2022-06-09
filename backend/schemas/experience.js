export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'gridArea',
            title: 'Grid Area',
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
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}