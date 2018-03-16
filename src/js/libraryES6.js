/*
AJAX({
    type: 'POST',
    url: 'odbierz.php',
    data: {
        firstName
    },
    headers: {
        'X-My-Header': '123'
    },
    success: function(response,xhr) {
        console.log('Udalo sie! Status: xhr.status');
    },
    failure: function(xhr) {
        console.log('Wystąpił błąd. Status: xhr.status');
    }
})
*/

class AJAX  {
    constructor(config) {
        this._xhr = new XMLHttpRequest();
        this._config = this._extendOptions(config);

        console.log(this._config);
    }

    _defaultConfig() {
        return {
            type: 'GET',
            url: window.location.href,
            data: {},
            options: {
                async: true,
                timeout: 0,
                username: null,
                password: null
            },
            headers: {}
        };
    }

    _extendOptions(config) {
        const defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig()));

        for(let key in defaultConfig) {
            if(key in config) {
               continue;
            }
            config[key] = defaultConfig[key];
        }

        return config;
    }

    _assignEvents(e) {

    }

}







new AJAX({
    type: 'POST',
    data: {
        firstName: 'Jan',
        lastName: 'Kowalski'
    },
    headers: {
        'X-My-Header': '123'
    },
    success: function(response,xhr) {
        console.log('Udalo sie! Status: xhr.status');
    },
    failure: function(xhr) {
        console.log('Wystąpił błąd. Status: xhr.status');
    }
});