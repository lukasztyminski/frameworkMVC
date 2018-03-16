(function() {

    class Validator {
        constructor(form) {
            this.form = form;
            this.fields = this.form.querySelectorAll(':required');
            this.errors = [];
            this.errorsList = this.form.querySelector('.alert ol');

            if(!this.fields.length) return;

            this.form.addEventListener('submit', (e) => {
                e.preventDefault();

                let formValid = this.validate();

                if(formValid) {
                    this.form.submit();
                } else {
                    return;
                }

            });
        }

        validate() {
            this.clearErrors();

            for(let field of this.fields) {
                this.validateField(field);
            }

            if(!this.errors.length) {
                return true;
            } else {
                this.showErrors();
                return;
            }
        }

        validateField(field) {
            let fieldValid = field.validity.valid;

            if(fieldValid) {
                this.markAsValid(field);
            } else {
                this.errors.push(field.dataset.errorMessage);
                this.markAsInvalid(field);
            }
        }

        markAsValid(field) {
            field.classList.remove('invalid');
            field.classList.add('valid');
        }

        markAsInvalid(field) {
            field.classList.remove('valid');
            field.classList.add('invalid');
        }

        showErrors() {
            let errorsListElements = document.createDocumentFragment();

            for(let error of this.errors) {
                let liEl = document.createElement('li');

                liEl.textContent = error;
                errorsListElements.appendChild(liEl);
            }

            this.errorsList.appendChild(errorsListElements);
            this.errorsList.parentNode.style.display = 'block';
        }

        clearErrors() {
            this.errors.length = 0;
            this.errorsList.parentNode.style.display = 'none';
            this.errorsList.innerHTML = '';
        }
    }


    const From = new Validator(document.querySelector('#form'));

})();