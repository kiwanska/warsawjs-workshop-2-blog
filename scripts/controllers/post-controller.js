(function() {

    let PostComponent = window.blog.components.PostComponent;
    let PostAddFormComponent = window.blog.components.PostAddFormComponent;
    let router = window.blog.router;

    class PostController {

        constructor() {

            this.postList = [];
            this.postAddFormComponent = new PostAddFormComponent();

            window.blog.runtime.on('form-sent', (payload) => {
                payload.id = uuid.v4();
                this.postList.push(payload);
                new PostComponent(payload);
            })

        }

        _clearContainer() {
            const $container = document.querySelector('.container');
            $container.innerHTML = '';
        }

        onPostHandler(args) {
            this._clearContainer();
            let id = args.params.id;
            let post = this.postList.find( (post) => {
                return post.id == id;
            })
            new PostComponent(post);
        }

        onListHandler() {
            this._clearContainer();
            new PostAddFormComponent();
            this.postList.forEach( (post) => {
                new PostComponent(post);
            });

        }

    }

    window.blog.controllers.PostController = PostController;

}());