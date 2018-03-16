var domain = /\w+@(\w+\.\w{2,4})/g;
var p = document.querySelector('p');
// var search = domain.exec(p.textContent);

var search,
    domains = [];

while(search = domain.exec(p.textContent)) {
    domains.push(search[1]);
}

var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg",
    // "brazil-big-2000x1300.jpg"
];

var regex = /-thumb-\d{1,4}x\d{1,4}/;

// var thumbs = files.filter(function(file) {
//     return regex.test(file);
// });

files.forEach(function(file, i){
    var index = file.search(regex);

    if(index > -1) {
        files[i] = file.substring(0, index);

    }

});

function stringContains(string, pattern) {
    var regex = new RegExp(pattern),
        index = string.search(regex);

    return index > -1;

}