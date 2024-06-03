export class Post {
    #postEl = null
    #commentsEl = null
    #getPost = null
    #getComments = null
    #renderPost = null
    #renderComment = null
    #post = null

    constructor(postEl, commentsEl, options) {
        const { getPost, getComments, renderPost, renderComment } = options
        this.#postEl = postEl
        this.#commentsEl = commentsEl
        this.#getPost = getPost
        this.#getComments = getComments
        this.#renderPost = renderPost
        this.#renderComment = renderComment
        this.#post = this.getPost()
    }

    init() {
        window.onpopstate = () => {
            const url = new URL(window.location.href)
            const post = +url.searchParams.get('post')
            if (post !== this.#post) {
                this.setPost(post)
                this.loadPost()
                this.loadComments()
            }
        }
        this.loadPost()
        this.loadComments()
    }

    getPost() {
        const url = new URL(window.location.href);
        const post = +url.searchParams.get('id');
        return post;
    }

    setPost(post) {
        this.#post = post
    }

    loadPost() {
        this.#getPost(this.#post)
            .then(post => this.renderPost(post))
            .catch(e => console.log("Error:", e));
    }

    renderPost(post) {
        this.#postEl.innerHTML = this.#renderPost(post)
    }

    loadComments() {
        this.#getComments(this.#post)
            .then(comments => this.renderComments(comments))
            .catch(e => console.log("Error:", e));
    }

    renderComments(comments) {
        this.#commentsEl.innerHTML = comments.map(this.#renderComment).join(' ')
    }
}