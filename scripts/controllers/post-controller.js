(function() {

    let components = window.blog.components;
    let models = window.blog.models;

    class PostController {

        constructor() {
            this.postAddFormComponent = new components.PostAddFormComponent();
            this.postComponent = new components.PostComponent();
            this.postAddFormComponent = new models.PostListModel();
            this.postComponent = new models.PostModel();
        }

    }

    window.blog.controllers.PostController = PostController;

    const postController = new PostController();

}());