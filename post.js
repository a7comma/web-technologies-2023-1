import { Post } from './src/components/post.js'

const renderPostItem = item => `
    <p>ID: ${item.id}</p>
    <p>User ID: ${item.userId}</p>
    <h1>${item.title}</h1>
    <h3>${item.body}</h3>
`

const renderCommentItem = item => `
    <div class="comment">
        <hr>
        <p>Comment ID: ${item.id}</p>
        <h3>${item.name}</h3>
        <p>E-mail: ${item.email}</p>
        <h3>${item.body}</h3>
    </div>
`

const getPostItem = async (postId) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(async res => {
            return res.json()
        })
        .catch(e => console.log("Error:", e));
}

const getCommentItems = async (postId) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(async res => {
            return res.json()
        })
        .catch(e => console.log("Error:", e));
}

const init = () => {
    const postEl = document.getElementById('post');
    const commentsEl = document.getElementById('comments');
    new Post(postEl, commentsEl,
        {
            getPost: getPostItem,
            getComments: getCommentItems,
            renderPost: renderPostItem,
            renderComment: renderCommentItem
        })
        .init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} 
else {
    init();
}