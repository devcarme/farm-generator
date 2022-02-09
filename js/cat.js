//get random image of api
function getRandomImage() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
          document.getElementById('cat').src = data[0].url;
        }
    };
    xhr.send();
}

