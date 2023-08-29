export default {
    name: 'following_ledger',
    type: 'document',
    title: 'follows',
    fields: [
        {
            name: 'follower',
            type: 'reference',
            title: 'follower',
            to: [{type: 'users'}]
        },
        {
            name: 'followed',
            type: 'reference',
            title: 'followed',
            to: [{type: 'users'}]
        }
    ]
}