
let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 3, message: "It's my first post", likesCount: 20},
            {id: 4, message: "It's my first post", likesCount: 20},
            {id: 5, message: "It's my first post", likesCount: 20},
            {id: 6, message: "It's my first post", likesCount: 20}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Natasha'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Dasha'},
            {id: 5, name: 'Nina'},
            {id: 5, name: 'Igor'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your name?'},
            {id: 3, message: 'My name is Pavel'},
            {id: 4, message: 'Yo'}
        ]
    }
}

export let addPost = (postMassege) => {
    let newPost = {id: 7, message: postMassege, likesCount: 0};
    state.profilePage.posts.push(newPost);
}

export default state;

/*
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20}
]

let dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Egor'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Nina'},
    {id: 5, name: 'Igor'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name?'},
    {id: 3, message: 'My name is Pavel'},
    {id: 4, message: 'Yo'}
]*/
