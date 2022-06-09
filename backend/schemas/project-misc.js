export default {
    name: 'project-misc',
    title: 'Project Misc',
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
            name: 'projectURL',
            title: 'Project URL',
            type: 'url',
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