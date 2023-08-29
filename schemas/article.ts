export default {
    name: 'articles',
    type: 'document',
    title: 'articles',
    fields: [
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{type: 'users'}]
        },
        {
            name: 'title',
            type: 'string',
            title: 'Article title'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Article content'
        }
    ]
}