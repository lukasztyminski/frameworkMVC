const validateForm = (function() {
    let options = {};
    const classError = 'error';

    const showFieldValidation = function(input, inputIsValid) {
        if (!inputIsValid) {
            input.parentNode.classList.add(options.classError);
        } else {
            input.parentNode.classList.remove(options.classError);
        }
    };

    const testInputText = function(input) {
        let inputIsValid = true;
        const pattern = input.getAttribute('pattern');

        if (pattern != null) {
            const reg = new RegExp(pattern, 'gi');
            if (!reg.test(input.value)) {
                inputIsValid = false;
            }
        } else {
            if (input.value=='') {
                inputIsValid = false;
            }
        }

        if (inputIsValid) {
            showFieldValidation(input, true);
            return true;
        } else {
            showFieldValidation(input, false);
            return false;
        }
    };

    const testInputEmail = function(input) {
        const mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');

        if (!mailReg.test(input.value)) {
            showFieldValidation(input, false);
            return false;
        } else {
            showFieldValidation(input, true);
            return true;
        }
    };

    const testInputURL = function(input) {
        const urlReg = new RegExp('^http:\/\/.+', 'i');
        if (!urlReg.test(input.value)) {
            showFieldValidation(input, false);
            return false;
        } else {
            showFieldValidation(input, true);
            return true;
        }
    };

    const testInputSelect = function(select) {
        if (select.options[select.selectedIndex].value =='' || select.options[select.selectedIndex].value =='-1') {
            showFieldValidation(select, false);
            return false;
        } else {
            showFieldValidation(select, true);
            return true;
        }
    };

    const testInputCheckbox = function(input) {
        const name = input.getAttribute('name');
        const group = input.form.querySelectorAll(':scope input[name="'+name+'"]:checked');

        if (group.length) {
            showFieldValidation(input, true);
            return true;
        } else {
            showFieldValidation(input, false);
            return false;
        }
    };

    const testInputDate = function(input) {
        if (!input.value == '') {
            showFieldValidation(input, true);
            return true;
        } else {
            showFieldValidation(input, false);
            return false;
        }
    };

    const prepareElements = function() {
        const elements = options.form.querySelectorAll(':scope [required]');

        [].forEach.call(elements, function(element) {
            if (element.nodeName.toUpperCase() == 'INPUT') {
                const type = element.type.toUpperCase();

                if (type == 'TEXT') {
                    element.addEventListener('keyup', function() {testInputText(element)});
                    element.addEventListener('blur', function() {testInputText(element)});
                }
                if (type == 'DATE') {
                    element.addEventListener('keyup', function() {testInputText(element)});
                    element.addEventListener('blur', function() {testInputText(element)});
                    element.addEventListener('click', function() {testInputDate(element)});
                }
                if (type == 'EMAIL') {
                    element.addEventListener('keyup', function() {testInputEmail(element)});
                    element.addEventListener('blur', function() {testInputEmail(element)});
                }
                if (type == 'URL') {
                    element.addEventListener('keyup', function() {testInputURL(element)});
                    element.addEventListener('blur', function() {testInputURL(element)});
                }
                if (type == 'CHECKBOX') {
                    element.addEventListener('click', function() {testInputCheckbox(element)});
                }
                if (type == 'RADIO') {
                    element.addEventListener('click', function() {testInputCheckbox(element)});
                }
            }
            if (element.nodeName.toUpperCase() == 'TEXTAREA') {
                element.addEventListener('keyup', function() {testInputText(element)});
                element.addEventListener('blur', function() {testInputText(element)});
            }
            if (element.nodeName.toUpperCase() == 'SELECT') {
                element.addEventListener('change', function() {testInputSelect(element)});
            }
        });
    };

    const formSubmit = function() {
        options.form.addEventListener('submit', function(e) {
            e.preventDefault();

            let validated = true;

                //pobieramy wszystkie pola, którym wcześniej ustawiliśmy klasę .required
                const elements = options.form.querySelectorAll(':scope [required]');

                //podobne działanie już robiliśmy przy przygotowywaniu pól
                for(let element of elements) {
                    if (element.nodeName.toUpperCase() == 'INPUT') {
                        const type = element.type.toUpperCase();
                        if (type == 'EMAIL') {
                            if (!testInputEmail(element)) validated = false;
                        }
                        if (type == 'URL') {
                            if (!testInputURL(element)) validated = false;
                        }
                        if (type == 'TEXT') {
                            if (!testInputText(element)) validated = false;
                        }
                        if (type == 'CHECKBOX') {
                            if (!testInputCheckbox(element)) validated = false;
                        }
                        if (type == 'RADIO') {
                            if (!testInputCheckbox(element)) validated = false;
                        }
                        if (type == 'DATE') {
                            if (!testInputDate(element)) validated = false;
                        }
                    }
                    if (element.nodeName.toUpperCase() == 'TEXTAREA') {
                        if (!testInputText(element)) validated = false;
                    }
                    if (element.nodeName.toUpperCase() == 'SELECT') {
                        if (!testInputSelect(element)) validated = false;

                    }
                };

                // if (validated) {
                //     this.submit();
                // } else {
                //     return false;
                // }
            });
    };

    const init = function(_options) {
            //do naszego modulu bedziemy przekazywac opcje
            options = {
                form : _options.form || null,
                classError : _options.classError || 'error'
            };
            if (options.form === null || options.form === undefined || options.form.length==0) {
                console.warn('validateForm: Źle przekazany formularz');
                return false;
            }

            //ustawiamy dla form novalidate - dzieki temu nie bedzie domyslnych dymkow walidacji dla pol required
            options.form.setAttribute('novalidate', 'novalidate');

            prepareElements();
            formSubmit();
        };

        return {
            init : init
        };
    })();