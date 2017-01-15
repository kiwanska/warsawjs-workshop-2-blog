(function() {

    class PostAddFormComponent {

        constructor(data) {
            this.template = document.querySelector('#post-add-form-component').innerHTML;
            this.$container = document.querySelector('.container');
            this.render(data);
        }

        render (data) {
            let compiledTemplate  = Mustache.render(this.template, data);
            let element = document.createElement('post');
            element.innerHTML = compiledTemplate;
            let parser = new DOMParser();
            let parsedElement = parser.parseFromString(compiledTemplate, "text/html")
                .querySelector('section');
            this.$container.appendChild(parsedElement);
        }

    }

    window.blog.components.PostAddFormComponent = PostAddFormComponent;

}());



