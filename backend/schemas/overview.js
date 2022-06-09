export default {
    name: 'overview',
    title: 'Overview',
    type: 'document',
    fields: [
        {
            name: 'highlightedTitle',
            title: 'Highlighted Title',
            type: 'string'
        },
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
            name: 'icons',
            title: 'Icons',
            type: 'array',
            of: [
                {
                    type: 'image'
                },
                {
                    name: 'iconURL',
                    title: 'Icon URL',
                    type: 'object',
                    fields: [
                        {
                            name: 'iconTitle',
                            title: 'Icon Title',
                            type: 'string'
                        },
                        {
                            name: 'iconURL',
                            title: 'Icon URL',
                            type: 'url'
                        }
                    ]
                }
            ]
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