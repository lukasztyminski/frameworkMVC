var xhr = new XMLHttpRequest(),
    data = new FormData();

var placeholderJSON = 'https://jsonplaceholder.typicode.com/posts/1',
    download = document.getElementById('download'),
    upload = document.getElementById('upload');


xhr.open('POST', 'odbierz.php', true);

xhr.addEventListener('readystatechange', function(){
   if(this.readyState === 4 && this.status >= 200 && this.status < 300) {
        console.log(this.response);
   }
});

xhr.addEventListener('progress', function(e){
    console.log(e);

    if(e.lengthComputable) {
        var percent = (e.loaded / e.total) * 100;

        download.value = percent;
    }
});

xhr.upload.addEventListener('progress', function(e){

    if(e.lengthComputable) {
        var percent = (e.loaded / e.total) * 100;

        upload.value = percent;
    }
});

data.append('firstName', 'Jan');
data.append('lastName', 'Kowalski');

// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(data);
