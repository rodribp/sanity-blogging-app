export default {
    name: 'users',
    type: 'document',
    title: 'users', 
    fields: [
        {
            name: 'username',
            type: 'string',
            title: 'username'
        },
        {
            name: 'wallet',
            type: 'string',
            title: 'wallet name'
        },
        {
            name: 'password',
            type: 'string',
            title: 'password'
        },
        {
            name: 'bio',
            type: 'string',
            title: 'biography'
        },
        {
            name: 'key',
            type: 'string',
            title: 'private key'
        },
        {
            name: 'lnurlp',
            type: 'string',
            title: 'lnurlp'
        }
    ]
}