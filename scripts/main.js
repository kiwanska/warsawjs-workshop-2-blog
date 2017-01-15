(function(){

    let PostController = window.blog.controllers.PostController;
    let router = window.blog.router;

    document.addEventListener('DOMContentLoaded',function(e){

        const controller = new PostController();

        router.get('/posts', controller.onListHandler.bind(controller));

        router.get('/posts/:id', controller.onPostHandler.bind(controller));

        if(!router.path()) {
            router.navigate('/posts')
        }

    });


})();



