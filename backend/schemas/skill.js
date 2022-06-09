export default {
    name: 'skill',
    title: 'Skill',
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
            name: 'tags',
            title: 'Tags',
            type:'array',
            of: [
                {
                    name:'tag',
                    title:'Tag',
                    type:'string'
                }
            ]
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}