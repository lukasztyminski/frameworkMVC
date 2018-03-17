(function() {

    'use strict';

    app.UserColletionModel = class UserColletionModel extends app.Abstract.Model {
        constructor() {
            super();
            this.set('collection', []);
        }
    };

})();