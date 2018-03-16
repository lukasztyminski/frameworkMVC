function setCookie(name, value, days, path, domain, secure) {

    if(!navigator.cookieEnabled) {
        return;
    }

    var e = encodeURIComponent;

    var cookie = e(name) + '=' + e(value);

    if(typeof days === 'number') {
        var date = new Date();

        date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

        cookie += '; expires=' + date.toUTCString();
    }

    if(path) {
        cookie += '; path=' + path;
    }

    if(domain) {
        cookie += '; domain=' + domain;
    }

    if(secure) {
        cookie += '; secure;';
    }

    document.cookie  = cookie;
}

function getCookie(name) {

    if(!document.cookie) return null;

    var arr = document.cookie.split(/; */),
        cookies = {};

    arr.forEach(function(cookie){
        cookie = cookie.split('=');
        cookies[cookie[0]] = decodeURIComponent(cookie[1]);
    });

    return cookies[name] || null;
}

