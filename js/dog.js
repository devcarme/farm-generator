var src;
let img = document.getElementById('img');
//function to get a random number
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => img.src = data.message)
  .catch(error => console.log(error));

function newDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => img.src = data.message)
    .catch(error => console.log(error));
}
