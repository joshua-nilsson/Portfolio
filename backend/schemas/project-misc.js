export default {
    name: 'project-misc',
    title: 'Project Misc',
    type: 'document',
    fields: [
        {
            name: 'title_1',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'imageURL_1',
            title: 'Image URL',
            type: 'url'
        },
        {
            name: 'projectURL_1',
            title: 'Project URL',
            type: 'url',
		},
		        {
            name: 'title_2',
            title: 'Title',
            type: 'string'
        },
        // {
        //     name: 'imageURL_2',
        //     title: 'Image URL',
        //     type: 'url'
        // },
        {
            name: 'projectURL_2',
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