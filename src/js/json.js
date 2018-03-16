var person = {
    _security: 'Admin',
    firstName: 'Jan',
    lastName: 'Kowalski',
    age: 23,
    hobbies: ['programowanie', 'sport'],
    birthdate: new Date(1994, 3, 11),
    married: false,
    salary: 6000,
    sayHello: function() {
        return this.firstName + ' ' + this.lastName;
    },
    zipCodePattern: /^\d{2}-\d{3}$/
};

RegExp.prototype.toJSON = function() {
    return this.source;
};

var personJSON = JSON.stringify(person, function(k, v){
    if(k[0] === '_') {
        return undefined;
    }

    // if(v instanceof RegExp) {
    //     return v.source;
    // }

    return v;
});

var personAgain = JSON.parse(personJSON, function(k, v){
    if(k === "birthdate") {
        return new Date(Date.parse(v));
    }

    if(k === "zipCodePattern") {
        return new RegExp(v);
    }

    return v;
});