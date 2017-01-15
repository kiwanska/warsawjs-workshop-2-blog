(function() {

    class PostAddFormComponent {

        constructor(data) {
            this.template = document.querySelector('#post-add-form-component').innerHTML;
            this.$container = document.querySelector('.container');
            this.render(data);
            this.addListeners();
        }

        addListeners() {
            const $form = this.$container.querySelector('form');

            $form.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = new FormData($form);
                let formDataObject = {};
                for (let [k, v] of data) {
                    formDataObject[k] = v;
                }
                window.blog.runtime.trigger('form-sent', formDataObject);
            })
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



