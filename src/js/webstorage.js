(function() {

class FormSaver {
    constructor(form) {
        this.form = form;
        this.fields = this.form.querySelectorAll('input[name]:not([type="submit"])');
        this.formID = this.form.getAttribute('id');
        this.fieldValues = {};

        this.loadVieldValues();
        this.addSavingToFields();

        this.form.addEventListener('submit', this.clearLocalStorage.bind(this));
    }

    addSavingToFields() {
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].addEventListener('change', this.saveField.bind(this));
        }

    }

    saveField(e) {
        let that = e.target;
        this.fieldValues[that.getAttribute('name')] = that.value;

        this.saveToLocalStorage();

    }

    saveToLocalStorage() {
        window.localStorage.setItem(this.formID, JSON.stringify(this.fieldValues));
    }

    clearLocalStorage(e) {
        e.preventDefault();

        window.localStorage.removeItem(this.formID);
    }

    loadVieldValues() {
        let savedFields = window.localStorage.getItem(this.formID);
        if(savedFields) {
            savedFields = JSON.parse(savedFields);

            for(let key in savedFields) {
                this.form.querySelector(`[name='${key}']`).value = savedFields[key];
            }
        }
    }
}

if('localStorage' in window) {
    const formToSave = new FormSaver(document.querySelector('#form'));
}

})();