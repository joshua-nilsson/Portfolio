export default {
    name: 'project',
    title: 'Project',
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
            name: 'githubURL',
            title: 'GitHub URL',
            type: 'url',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}